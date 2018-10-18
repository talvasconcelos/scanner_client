import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Sockette from 'sockette'
import * as tf from '@tensorflow/tfjs'

const WSURI = 'wss://market-scanner.herokuapp.com'

import Header from './header'
import Footer from './footer'
import Home from '../routes/home'
import Currency from '../routes/currency'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug')
}

export default class App extends Component {
	constructor(){
		super()
	}
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url
	}

	state = {
		isPairs: false,
		currency: ['BTC', 'ETH', 'BNB', 'USDT'],
		history: [],
		pairs: [],
		model: null,
		aiPairs: null
	}

	startWS() {
		const ws = new Sockette(WSURI, {
		  timeout: 30000,
		  maxAttempts: 10,
		  onopen: e => console.log('Connected!', e),
		  onmessage: e => this.pairsUpdate(JSON.parse(e.data)),
		  onreconnect: e => console.log('Reconnecting...', e),
		  onmaximum: e => console.log('Stop Attempting!', e),
		  onclose: e => console.log('Closed!', e),
		  onerror: e => console.log('Error:', e)
		})
	}

	pairsUpdate(pairs) {
		if (Array.isArray(pairs)) {
			if (pairs[0].hasOwnProperty('candles')) { 
				this.testAIpairs(pairs)
				console.log(pairs)
				return
			}
			this.setState({
				isPairs: true,
				history: [...this.state.pairs, ...this.state.history],
				pairs: this.separatePairs(pairs)
			})
		}
	}

	loadModel = () => {
		const model = tf.loadModel('../assets/model/LSTM-trade-model.json')
		model.then((m) => this.setState({
			model: m,
			loaded: true
		}))
	}

	testAIpairs(pairs) {
		const model = this.state.model
		const predictions = []

		pairs.map(async pair => {
			const X = tf.tensor3d([pair.candles])
			const P = model.predict(X).dataSync()
			const action = tf.argMax(P).dataSync()[0]
			if (action == 0) {
				predictions.push({
					pair: pair.pair,
					action,
					actionProb: P[action]
				})
			}
			
			X.dispose()
			await tf.nextFrame()
		})

		this.setState({
			aiPairs: this.separatePairs(predictions)
		})

	}

	separatePairs(pairs) {
    let btc = []
    let eth = []
    let bnb = []
    let usdt = []
    pairs.map(p => {
    	switch (true) {
    		case (/(BTC)$/g).test(p.pair):
    			btc.push(p)
    			break;
    		case (/(ETH)$/g).test(p.pair):
    			eth.push(p)
    			break;
    		case (/(BNB)$/g).test(p.pair):
    			bnb.push(p)
    			break;
    		case (/(USDT)$/g).test(p.pair):
    			usdt.push(p)
    			break;
    		default:
    			break;
    	}
    })
    return {btc, eth, bnb, usdt}
  }

	componentDidMount() {
		this.startWS()
		this.loadModel()
		//this.pairsUpdate(cacheState)
	}

	render({}, {aiPairs, pairs, currency}) {
		let count = Object.entries(pairs).map(c => c[1].length)
		return (
			<div id="app">
				<Header tabs={currency} count={count} />
				<Router onChange={this.handleRoute}>
          			<Home path='/'/>
					<Currency path="/currency/:curr" pairs={pairs} aiPairs={aiPairs} />
				</Router>
				<Footer />
			</div>
		)
	}
}

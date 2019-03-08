import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Sockette from 'sockette'
import * as tf from '@tensorflow/tfjs'
import styled from 'styled-components'

const WSURI = 'wss://market-scanner.herokuapp.com'

import Header from './header'
import Footer from './footer'
import Home from 'async!../routes/home'
import Currency from 'async!../routes/currency'
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

if (module.hot) {
	require('preact/debug')
}

const FloatingB = styled.div `
	width: 55px;
	height: 55px;
	border-radius: 50%;
	background: ${props => props.on ? 'var(--primary-color)' : 'grey'};
	position: fixed;
	bottom: 180px;
	right: 30px;
	cursor: pointer;
	box-shadow: 0px 2px 5px #666;
	z-index: 1;
	
`

const FloatText = styled.p `
	text-align: center;
	color: ${props => props.on ? '#fff' : 'var(--light-color)'};
	font-weight: 700;
`

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
		pairs: false,
		model: false,
		aiPairs: false,
		ai: true
	}

	startWS() {
		const ws = new Sockette(WSURI, {
			timeout: 30000,
			maxAttempts: 10,
			onopen: e => console.log('Connected!', e),
			onmessage: e => {
				console.log('Message: ', e)
				this.pairsUpdate(JSON.parse(e.data))
			},
			onreconnect: e => console.log('Reconnecting...', e),
			onmaximum: e => console.log('Stop Attempting!', e),
			onclose: e => console.log('Closed!', e),
			onerror: e => console.log('Error:', e)
		})
	}

	toggleAI = () => {
		this.setState({
			ai: !this.state.ai
		})
	}

	pairsUpdate = (pairs) => {
		if (Array.isArray(pairs)) {
			if (pairs[0].hasOwnProperty('AI')) {				
				this.state.loaded && Promise.resolve(this.testAIpairs(pairs))
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
		// tf.setBackend('cpu')
		tf.loadLayersModel('../assets/model/model/model.json').then(m => {
			// console.log(m)
			m.summary()
			//await m.save('indexeddb://signals')
			this.setState({
				model: m,
				loaded: true
			})
		}).catch(err => console.error(err))
		this.state.loaded && console.log('Loaded')
		this.startWS()
		return
	}
  
	testAIpairs = async (pairs) => {
		const model = this.state.model
		// console.log('Weights:', model.getWeights())
		const predictions = []

		pairs.map(async pair => {
			// pair.candles = pair.annState
			if(!pair.candles) {return}
			// pair.candles = pair.testModel
			// const sanitize = pair.candles
			// 	.flat()
			// 	.some(v => isNaN(v))
			// sanitize && console.log(pair)
			
			let action = 1
			const X = tf.tensor3d([pair.candles])
			const P = model.predict(X).dataSync()
			// if(pair.pair === 'DENTBTC' || pair.pair === 'FUNBTC'){
			// 	console.log(pair)
			// 	console.log(P)
			// }
			// console.log(P, pair.pair)
			action = tf.argMax(P).dataSync()[0]
			X.dispose()
			if (action === 1 || P[action] < 0.999) {
				return
			}
			// delete pair.candles
			// delete pair.annState
			pair.action = action
			pair.actionProb = P[action]
			// pair.compare = action === 0 ? P[1] : P[0]
			// if(pair.compare > P[2]){ return }
			predictions.push(pair)

			await tf.nextFrame()
		})
		
		// for(let i = 0; i < pairs.length; i++){
		// 	const pair = pairs[i]
		// 	pair.candles = pair.annState
		// 	const X = tf.tensor3d([pair.candles])
		// 	const P = model.predict(X).dataSync()
		// 	const action = tf.argMax(P).dataSync()[0]
		// 	console.log(P)
		// 	if(action === 2) {return}
		// 	if(P[action] < 1) {return}
			
		// 	delete pair.candles
		// 	pair.action = action
		// 	pair.actionProb = P[action]
		// 	pair.compare = action === 0 ? P[1] : P[0]
		// 	console.log(pair)
		// 	predictions.push(pair)

		// 	X.dispose()
		// 	await tf.nextFrame()
		// }

		console.log('Predict done!')
		console.log(predictions)
		this.setState({
			aiPairs: this.separatePairs(predictions.sort((a, b) => {
				return b.actionProb - a.actionProb
			}))
		})
		return
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
					case (/((ETH|XRP))$/g).test(p.pair):
					eth.push(p)
					break;
				case (/(BNB)$/g).test(p.pair):
					bnb.push(p)
					break;
					case (/((USD.|TUSD|USD|PAX))$/).test(p.pair):
					usdt.push(p)
					break;
				default:
					break;
			}
		})
		return {btc, eth, bnb, usdt}
	}

	componentDidMount() {
		this.loadModel()		
		//this.pairsUpdate(cacheState)
	}

	render({}, {ai, aiPairs, pairs, currency}) {
		let count = Object.entries(pairs).map(c => c[1].length)
		let aiCount = Object.entries(aiPairs).map(c => c[1].length)
		return (
			<div id="app">
				<Header tabs={currency} count={count} aicount={aiCount} />
				<Router onChange={this.handleRoute}>
          			<Home path='/'/>
					<Currency path="/currency/:curr" pairs={pairs} aiPairs={aiPairs} aiOn={ai} />
				</Router>
				<FloatingB onClick={this.toggleAI} on={ai}>
					<FloatText>AI</FloatText>
				</FloatingB>	
				<Footer />
			</div>
		)
	}
}

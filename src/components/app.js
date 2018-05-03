import { h, Component } from 'preact'
import { Router } from 'preact-router'
import Sockette from 'sockette'

const WSURI = 'wss://market-scanner.herokuapp.com'

const cacheState = [ { pair: 'DGDBTC',
    close: '0.04843100',
    ema: 0.048435154,
    vol: 0,
    roc: 7.2645124,
    rsi: 57,
    ai: 0.6053151710277989,
    gap: -0.000004 },
  { pair: 'RCNBTC',
    close: '0.00001291',
    ema: 0.000012922299,
    vol: 1,
    roc: 7.6730609,
    rsi: 57,
    ai: 0.5113807948927858,
    gap: -0 },
		{ pair: 'ADXBNB',
	    close: '0.07784000',
	    ema: 0.077941372,
	    vol: 1,
	    roc: 4.8915241,
	    rsi: 40,
	    ai: 0.8200922874577424,
	    gap: -0.000101 },
	  { pair: 'GTOBNB',
	    close: '0.02801000',
	    ema: 0.027445189,
	    vol: 0,
	    roc: 7.1947953,
	    rsi: 53,
	    ai: 0.6847159678857256,
	    gap: 0.000565 },
      { pair: 'DGDBTC',
          close: '0.04843100',
          ema: 0.048435154,
          vol: 0,
          roc: 7.2645124,
          rsi: 57,
          ai: 0.6053151710277989,
          gap: -0.000004 },
        { pair: 'RCNBTC',
          close: '0.00001291',
          ema: 0.000012922299,
          vol: 1,
          roc: 7.6730609,
          rsi: 57,
          ai: 0.5113807948927858,
          gap: -0 },
      		{ pair: 'ADXBNB',
      	    close: '0.07784000',
      	    ema: 0.077941372,
      	    vol: 1,
      	    roc: 4.8915241,
      	    rsi: 40,
      	    ai: 0.8200922874577424,
      	    gap: -0.000101 },
      	  { pair: 'GTOBNB',
      	    close: '0.02801000',
      	    ema: 0.027445189,
      	    vol: 0,
      	    roc: 7.1947953,
      	    rsi: 53,
      	    ai: 0.6847159678857256,
      	    gap: 0.000565 } ]

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
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
    pairs: []
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
		if(Array.isArray(pairs)){
			this.setState({
				isPairs: true,
        history: [...this.state.history, ...this.state.pairs],
				pairs: this.separatePairs(pairs)
			})
		}
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
		this.pairsUpdate(cacheState)
	}

	render({}, {isPairs, pairs, currency}) {
		let count = Object.entries(pairs).map(c => c[1].length)
		return (
			<div id="app">
				<Header tabs={currency} count={count} />
				<Router onChange={this.handleRoute}>
					<Profile path="/currency/:curr" pairs={pairs} />
				</Router>
			</div>
		)
	}
}

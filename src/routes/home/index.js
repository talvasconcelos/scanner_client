import { h, Component } from 'preact'
import styled from 'styled-components'

import Blurb from '../../components/blurb'

const Wrapper = styled.div`
	position: relative;
	display: block;
	padding-top: var(--navbar-heigth);
	margin-bottom: 5em;
	min-height: 100%;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column;
	justify-content: center;
	box-sizing: border-box;
	height: 56vw;
	max-height: 60vh;
	background: var(--dark-color);
	text-align: center;
	color: #fff;
	& .intro{
		margin: 2em auto;
		width: 90%;
		max-width: 960px;
	}
`


export default class Home extends Component {
	render() {
		return (
			<Wrapper>
				<Header>
					<div class='intro'>
						<h1>Crypto Scanner</h1>
						<h3>Binance crypto scanner.</h3>
						<p>Get alerts from Binance on possible breaking out coins.</p>
					</div>
				</Header>
				<div>
					<Blurb title='Technical Details' columns='2'>
						<p>The scanner reads candles from Binance at 15 minutes intervals. It takes the information and runs some technical indicators like Exponential Moving Average, Relative Strength Index, Money Flow Index, Relative Volume, etc... From there it checks, based on technical analysis (TA), if there may be a potential breakout for that coin. It runs the TA on every coin on Binance, every 15 minutes, alerting the ones with good potential!</p>
						<p><strong>I'm working on an AI model to make these predictions. The Scanner will be updated as soon as it proves to be reliable!</strong></p>
					</Blurb>
					<Blurb title='How to read/trade' columns='2'>
						<p>What do the alerts mean? If you're familiar with TA the acronyms RSI, MFI, MACD, etc, are nothing new to you. If you don't know what they are you should probabily learn them first before atempting to trade.</p>
						<p>The alerts show the pair name, a small graphic representing the movement for the past 20 candles/periods, the last closing price, the RSI, MFI and RVOL of the particular pair. There's also a timestamp indicating how long ago the alert was made.</p>
						<p>If you click on the alerts, a new window will open on Binance. If you are logged in you can trade immediatly! You sould always do your own research before trading.</p>
					</Blurb>
					<Blurb title='Indicators' columns='2'>
						<p><strong>RSI: </strong>The Relative Strength Index, is a momentum oscillator that measures the speed and change of price movements. The RSI oscillates between zero and 100. Traditionally the RSI is considered overbought when above 70 and oversold when below 30.</p>
						<p><strong>MFI: </strong>The Money Flow Index, is a momentum indicator that measures the flow of money into and out of a security over a specified period of time. It is related to the Relative Strength Index (RSI) but incorporates volume, whereas the RSI only considers price. The MFI is calculated by accumulating positive and negative Money Flow values (see Money Flow), then creating a Money Ratio. The Money Ratio is then normalized into the MFI oscillator form.</p>
						<p><strong>RVOL: </strong>The Relative Volume compares the current volume to the average of the specified period of time and is displayed as a ratio. So for example, a stock trading 5 1/2 times its normal volume would have a Relative Volume display of 5.5.</p>
					</Blurb>
					<Blurb title='Donations'>
						<p>If you find the scanner useful and want to support my work and further developments, you can do so using the bellow adresses:</p>
						<p><strong>BTC: </strong><small>3Fs51ccC854seUbbxR59k4Mph8BG64AC3Y</small></p>
						<p><strong>ETH: </strong><small>0xb4E617BC39c7a796a06515DA166305b78aeAF345</small></p>
						<p><strong>LTC: </strong><small>LVFsWKJgMtY9F4kVXiZ9MD4xmNK3PaepLT</small></p>
						<p><strong>Thank you for your support! </strong></p>
					</Blurb>
				</div>
			</Wrapper>
		);
	}
}

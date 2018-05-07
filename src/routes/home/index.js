import { h, Component } from 'preact'
import styled from 'styled-components'

import Blurb from '../../components/blurb'

const Wrapper = styled.div`
	display: block;
	padding-top: var(--navbar-heigth);
	margin-bottom: 5em;
	background: pink;
`

const Header = styled.div`
	display: flex;
	align-items: center;
	flex-flow: column;
	justify-content: center;
	height: 86vw;
	max-height: 60%;
	background: var(--dark-color);
	text-align: center;
	color: #fff;
	& .intro{
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
				<Blurb title='Technical Details'>
					<p>The scanner reads candles from Binance at 15 minutes intervals. It takes the information and runs some technical indicators like Exponential Moving Average, Relative Strength Index, Money Flow Index, Relative Volume, etc... From there it checks, based on technical analysis (TA), if there may be a potential breakout for that coin. It runs the TA on every coin on Binance, every 15 minutes, alerting the ones with good potential!</p>
					<p><strong>I'm working on an AI model to make these predictions. The Scanner will be updated as soon as it proves to be reliable!</strong></p>
				</Blurb>
				<Blurb title='How to read/trade'>
					<p>What do the alerts mean? If you're familiar with TA the acronyms RSI, MFI, MACD, etc, are nothing new to you. If you don't know what they are you should probabily learn them first before atempting to trade.</p>
					<p>The alerts show the pair name, a small graphic representing the movement for the past 20 candles/periods, the last closing price, the RSI, MFI and RVOL of the particular pair. There's also a timestamp indicating how long ago the alert was made.</p>
					<p>If you click on the alerts, a new window will open on Binance. If you are logged in you can trade immediatly! You sould always do your own research before trading.</p>
				</Blurb>
				<Blurb title='Indicators'>
					<p><strong>RSI: </strong>The Relative Strength Index, is a momentum oscillator that measures the speed and change of price movements. The RSI oscillates between zero and 100. Traditionally the RSI is considered overbought when above 70 and oversold when below 30.</p>
					<p><strong>MFI: </strong>The Money Flow Index, is a momentum indicator that measures the flow of money into and out of a security over a specified period of time. It is related to the Relative Strength Index (RSI) but incorporates volume, whereas the RSI only considers price. The MFI is calculated by accumulating positive and negative Money Flow values (see Money Flow), then creating a Money Ratio. The Money Ratio is then normalized into the MFI oscillator form.</p>
					<p><strong>RVOL: </strong>The Relative Volume compares the current volume to the average of the specified period of time and is displayed as a ratio. So for example, a stock trading 5 1/2 times its normal volume would have a Relative Volume display of 5.5.</p>
				</Blurb>
			</Wrapper>
		);
	}
}

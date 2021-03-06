import { h, Component } from 'preact'
import styled from 'styled-components'

import Blurb from '../../components/blurb'
import Donation from '../../components/donations'

const Wrapper = styled.div`
	position: relative;
	display: block;
	padding-top: var(--navbar-heigth);
	margin-bottom: 5em;
	min-height: 100%;
`

const Header = styled.header`
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
						<h1>Coin Market Scanner</h1>
						<h3>Binance crypto scanner.</h3>
						<p>Get alerts for Binance on possible breaking out coins.</p>
					</div>
				</Header>
				<div>
					<Blurb title='New trading bot' columns='1'>
						<p><strong>I'm releasing, as an early Alpha, the bot I'm using to trade the Coin Market Signal's signals.</strong></p>
						<p>As mentioned, this is an Alpha version of the bot. Use it, if you want, with extreme care. Don't leave it unattended for long periods of time. I recommend opening a test account on Binance, send some BTC to that account and try it out.</p>
						<p>The CMS Bot is open source and it's available at Github, <a href="https://github.com/talvasconcelos/cms-bot" target="_blank">CMS Bot</a>. You'll need NodeJS in order to run the bot. If you find an issue, report it in the issues on the project repository, or if you want, open a Pull Request with your fixes.</p>
						<p>You can find a simple, and very optimistic, calculator I did to check how much to expect from microtrading or compound trading <a href="https://observablehq.com/@talvasconcelos/coin-market-scanner-calculator" target="_blank">here</a>.</p>
						<p><strong>The bot has some bugs, use it with extreme care.</strong></p>
					</Blurb>
					<Blurb title='Technical Details' columns='2'>
						<p>Coin Market Scanner uses Artificial Inteligence to predict possible coin breakouts. The target profit is 3.5-5% in the next 12 hours. The AI Signals have a green or red color for buy and sell signals. There's also displayed the AI probability that the asset will make a move. I included a Take Profit target just for reference.</p>

						<p>The scanner reads candles from Binance at 60 minutes intervals. It takes the information and runs technical indicators like Exponential Moving Average, Relative Strength Index, Money Flow Index, Relative Volume, etc... From there it checks, based on technical analysis (TA), if there may be a potential breakout for that coin. It runs the TA on every coin on Binance, every 15 minutes, alerting the ones with good potential!</p>
						<p>If you want to trade with these signals in an automated way, you can find me at <a href="https://www.cryptohopper.com/signaller?signaller_id=224" target="_blank">Crypto Hopper</a>. If you subscribe to the signals you can use them on your hoppers. I use a custom bot to trade the signals. I may make it public in the future.</p>
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
						<p>If you find the scanner useful and want to support my work and further developments, or just want to buy me a beer:</p>			
						<section class='centered'>
							<Donation />
						</section>
					</Blurb>
				</div>
			</Wrapper>
		);
	}
}

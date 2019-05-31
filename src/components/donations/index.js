import { h, Component } from 'preact'

class Donation extends Component {
	state = {
		value: 2
    }
    
    doIncrement = () => {
        this.setState({value: this.state.value + 1})
    }

    doDecrement = () => {
        this.setState({value: Math.max(this.state.value - 1, 1)})
    }
	
	render({}, { value }) {
		return (
            <div class='btcpay'>
                <div class='input'>
                    <button onClick={this.doDecrement}>&#8722;</button>
                    <input                        
                        value={'€'+value.toFixed(2)}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button onClick={this.doIncrement}>&#43;</button>
                </div>
                <form class='form' method="POST" action="https://btcpay01.sparkpay.pt/api/v1/invoices">
                    <input type="hidden" name="storeId" value="Shnkny3J4SuH5ThRZjSZPEKB4DCt6Q97nrShhtStpgb" />
                    <input type="hidden" name="price" value={value} />
                    <input type="hidden" name="currency" value="EUR" />
                    <input type="hidden" name="checkoutDesc" value="CMS Donation" />
                    <input type="hidden" name="browserRedirect" value="https://coinmarketscanner.app" />
                    <input type="hidden" name="notifyEmail" value="talvasconcelos@gmail.com" />
                    <input type="image" src="https://btcpay01.sparkpay.pt/img/paybutton/pay.png" name="submit" style="width:209px" alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor" />
                </form>
            </div>
		);
	}
}

export default Donation
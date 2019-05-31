import Donation from '../donations'

const Modal = ({dismiss}) => {
    return (
        <div class="modal">
            <div class="overlay"></div>
            <div class="modal_content">
                {/* <!-- Dynamic Section --> */}
                <h2>Consider making a Donation?</h2>
                <p style="text-align: center;">
                Hi, i'd really appreciate a small donation to keep up developing to this site. Donations are in BTC... Give me some satoshi love via Lightning Network!
                </p>
                {/* <!-- End of Dynamic Section --> */}
                <div>
                    <br/>
                    <Donation />
                </div>
                <button title="Close" class="close_modal" onClick={dismiss}>
                    X
                </button>
            </div>
        </div>
    )
}

export default Modal
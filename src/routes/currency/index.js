import { h, Component } from 'preact'
import styled from 'styled-components'

const Wrapper = styled.div`
	width: 95%;
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;
	padding-top: calc(var(--navbar-heigth) + 1em);
	min-height: 100%;
`

//margin-top: calc(var(--navbar-heigth) + 0.5em);

import Item from '../../components/Item'

const Currency = ({curr, pairs}) => {
	let current_pairs = pairs[curr]
  return (
		<Wrapper>
			{current_pairs && current_pairs.map(cur => {
				let asset = cur.pair.split(curr.toUpperCase())[0]
				let url = 'https://www.binance.com/trade.html?symbol='.concat(asset, '_', curr.toUpperCase())
				let name = `${asset}/${curr.toUpperCase()}`
				let data = cur.frontEnd.map(c => c.close)
				return (<Item pair={cur} url={url} name={name} sparkData={data} />)
			})}
			{current_pairs.length != 0 && <Item manual name='Donations' sparkData={[]}/>}
		</Wrapper>
	)
}

export default Currency

// const Profile extends Component {
// 	state = {
// 		time: Date.now(),
// 		count: 10
// 	};
//
// 	// gets called when this route is navigated to
// 	componentDidMount() {
//
// 	}
//
// 	render({ curr, pairs }, { time, count }) {
// 		let l = pairs[curr].length
// 		return (
// 			<div class={style.profile}>
// 				<h1>Profile: {curr}</h1>
// 				<p>This is the user profile for a user named { curr }.</p>
// 				<p>Count: { l }</p>
// 				{l ? <Item pairs={pairs[curr]} /> : null}
//
// 				<div>Current time: {new Date(time).toLocaleString()}</div>
//
// 				<p>
// 					<button onClick={this.increment}>Click Me</button>
// 					{' '}
// 					Clicked {count} times.
// 				</p>
// 			</div>
// 		);
// 	}
// }
//
// export default Profile

import { h, Component } from 'preact'
import styled from 'styled-components'

const Wrapper = styled.div`
	padding: calc(var(--navbar-heigth) + 0.5em) 0.75em;
`
//margin-top: calc(var(--navbar-heigth) + 0.5em);

import Item from '../../components/Item'

const Profile = ({curr, pairs}) => {
	let current_pairs = pairs[curr]
  return (
		<Wrapper>
			{current_pairs.map(cur => {
				let url = cur.pair.split(curr.toUpperCase())[0]
				url = 'https://www.binance.com/trade.html?symbol='.concat(url, '_', curr.toUpperCase())
				return (<Item pair={cur} url={url}></Item>)
			})}

		</Wrapper>
	)
}

export default Profile

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

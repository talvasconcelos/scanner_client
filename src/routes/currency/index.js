import styled from 'styled-components'

const Wrapper = styled.div`
	width: 95%;
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;
	padding-top: calc(var(--navbar-heigth) + 1em);
	min-height: 100%;
`


import Item from '../../components/Item'

const Currency = ({aiOn, curr, pairs, aiPairs, donate}) => {
	const current_pairs = pairs && pairs[curr]
	const cur_aiPairs = aiPairs && aiPairs[curr]
  	return (
		<Wrapper>
			{aiOn && !cur_aiPairs && <p>Getting AI predictions...</p>}				
			{aiOn && cur_aiPairs && cur_aiPairs.map(cur => {
				const testCur = cur.pair.match(/((USD.|TUSD|USD|PAX|XRP))$/)
				curr = testCur ? testCur[0] : curr
				let asset = cur.pair.split(curr.toUpperCase())[0]
				let url = 'https://www.binance.com/en/trade/pro/'.concat(asset, '_', curr.toUpperCase())
				let name = `${asset}/${curr.toUpperCase()}`
				let data = cur.frontEnd.map(c => c.close)
				return (<Item pair={cur} url={url} name={name} sparkData={data} ai />)
			})}
			{current_pairs && current_pairs.map(cur => {
				const testCur = cur.pair.match(/((USD.|TUSD|USD|PAX|XRP))$/)
				curr = testCur ? testCur[0] : curr
				let asset = cur.pair.split(curr.toUpperCase())[0]
				let url = 'https://www.binance.com/en/trade/pro/'.concat(asset, '_', curr.toUpperCase())
				let name = `${asset}/${curr.toUpperCase()}`
				let data = cur.frontEnd.map(c => c.close)
				return (<Item pair={cur} url={url} name={name} sparkData={data} />)
			})}
			{current_pairs.length > 0 && <Item manual name='Donations' sparkData={[]} donate={donate} />}
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

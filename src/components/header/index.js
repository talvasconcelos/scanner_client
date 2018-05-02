import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styled from 'styled-components'
import style, { css } from './style'

const Tab = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	width: 100%;
	display: table;
`

const TabItem = styled.li`
	display: table-cell;
	height: 56px;
	background: pink;
	border-bottom: ${props => props.active ? '2px solid black' : '2px solid pink'};
`

export default class Header extends Component {
	render() {
		return (
			<Tab>
				<TabItem active>BTC</TabItem>
				<TabItem>ETH</TabItem>
				<TabItem>BNB</TabItem>
				<TabItem>USDT</TabItem>
			</Tab>
			// <header class={style.header}>
			// 	<h1>Preact App</h1>
			// 	<nav>
			// 		<Link activeClassName={style.active} href="/">Home</Link>
			// 		<Link activeClassName={style.active} href="/profile">Me</Link>
			// 		<Link activeClassName={style.active} href="/profile/john">John</Link>
			// 	</nav>
			// </header>
		);
	}
}

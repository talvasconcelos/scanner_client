import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styled, { css } from 'styled-components'
//import style from './style'

const Tabs = styled.header`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: var(--navbar-height);
	padding: 0;
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	z-index: 50;
`

const Nav = styled.nav`
	display: flex;
	justify-content: space-around;
	background: #FFF;
`

const S_Link = styled(Link)`
	display: inline-block;
	padding: 0 1em;
	line-height: var(--navbar-heigth);
	width: 100%;
	text-align: center;
	background: rgba(255,255,255,0);
	text-decoration: none;
	font-weight: bold;
	color: var(--text-color);
	border-bottom: 2px solid #FFF;
	will-change: border-bottom;
	&:hover,
	&.activeTab {
		border-bottom: 2px solid var(--primary-color);
	}
`

export default class Header extends Component {
	render({count, tabs}) {
		return (
			<Tabs>
				<Nav>
					{tabs.map((cur, i) => {
						let l = count[i]
						return(
							<S_Link activeClassName='activeTab' href={`/currency/${cur.toLowerCase()}`}>
								{cur}
								<span>{` ${l}`}</span>
							</S_Link>
						)
					})}
				</Nav>
			</Tabs>
		);
	}
}

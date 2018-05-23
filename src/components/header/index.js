import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styled, { css } from 'styled-components'


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
	position: relative;
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
	transition: all 0.25s ease;
	&:hover,
	&.activeTab {
		border-bottom: 2px solid var(--primary-color);

	}
	&::before{
		display: ${props => props.badge ? 'block': 'none'};
		content: attr(badge);
		width: 1em;
		height: 1em;
		line-height: 1em;
		background: var(--primary-color);
		color: #fff;
		border-radius: 50%;
		padding: 3px;
		position: absolute;
		top: 10px;
		right: 8px;
	}
`

const Header = ({count, tabs}) => {
	return (
		<Tabs>
			<Nav>
				{tabs.map((cur, i) => {
					let l = count[i]
					return(
						<S_Link activeClassName='activeTab' href={`/currency/${cur.toLowerCase()}`} badge={l}>
							{cur}
						</S_Link>
					)
				})}
			</Nav>
		</Tabs>
	)
}

export default  Header

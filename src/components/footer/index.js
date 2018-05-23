import { Link } from 'preact-router/match'
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 5em;
  width: 100%;
  padding: 1em;
  background: var(--dark-color);
  color: #fff;
  text-align: center;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & li {
    display: inline-block;
    margin: 0.5em;
  }
`

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
`


const Footer = ({children, title}) => {
  return (
    <Wrapper>
      <h3>Coin Market Scanner</h3>
      <List>
        <li><SLink href='/'>Home</SLink></li>
        <li><SLink href='/currency/btc'>BTC</SLink></li>
        <li><SLink href='/currency/eth'>ETH</SLink></li>
        <li><SLink href='/currency/bnb'>BNB</SLink></li>
        <li><SLink href='/currency/usdt'>USDT</SLink></li>
      </List>
      <small>This is not financial advice.</small>
    </Wrapper>
  )
}

export default Footer

import { Link } from 'preact-router/match'
import styled from 'styled-components'
import { relative } from 'path';

const Wrapper = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 2em;
  width: 100%;
  padding: 2em;
  background: var(--dark-color);
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

const style = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1em',
  textAlign: 'center',
  color: '#fff'
}


const Footer = ({children, title}) => {
  return (
    <Wrapper>
      <div style={style}>
        <h3>Coin Market Scanner</h3>
        <List>
          <li><SLink href='/'>Home</SLink></li>
          <li><SLink href='/currency/btc'>BTC</SLink></li>
          <li><SLink href='/currency/eth'>ETH</SLink></li>
          <li><SLink href='/currency/bnb'>BNB</SLink></li>
          <li><SLink href='/currency/usdt'>USDT</SLink></li>
        </List>
        <small>This is not financial advice.</small>
      </div>
      <div style={style}>
        <h3>Let's connect</h3>
        <small>Open a lightning (LND) channel with CMS</small>
        <br/>
        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 37 37" shape-rendering="crispEdges"><path fill="#ffffff" d="M0 0h37v37H0z"></path><path stroke="#000000" d="M0 0.5h7m1 0h1m5 0h3m1 0h2m2 0h1m2 0h2m1 0h1m1 0h7M0 1.5h1m5 0h1m1 0h2m1 0h3m5 0h3m2 0h3m1 0h1m1 0h1m5 0h1M0 2.5h1m1 0h3m1 0h1m1 0h3m2 0h4m1 0h1m3 0h1m5 0h1m1 0h1m1 0h3m1 0h1M0 3.5h1m1 0h3m1 0h1m2 0h3m1 0h5m1 0h2m3 0h2m1 0h1m2 0h1m1 0h3m1 0h1M0 4.5h1m1 0h3m1 0h1m1 0h1m2 0h2m3 0h1m2 0h1m1 0h1m4 0h2m2 0h1m1 0h3m1 0h1M0 5.5h1m5 0h1m2 0h5m1 0h2m4 0h1m1 0h2m5 0h1m5 0h1M0 6.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M9 7.5h3m1 0h1m2 0h2m1 0h1m2 0h1m1 0h5M0 8.5h1m2 0h6m1 0h1m1 0h1m1 0h2m2 0h1m5 0h1m3 0h2m2 0h1m1 0h3M1 9.5h1m3 0h1m3 0h1m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m2 0h2m4 0h2M1 10.5h1m1 0h5m1 0h2m2 0h7m1 0h1m1 0h2m2 0h3m3 0h2m1 0h1M1 11.5h1m1 0h3m1 0h2m3 0h3m1 0h1m1 0h6m1 0h1m7 0h1M2 12.5h1m1 0h1m1 0h1m2 0h1m2 0h6m2 0h2m1 0h1m2 0h2m1 0h3m1 0h4M2 13.5h4m1 0h2m1 0h2m1 0h1m1 0h2m1 0h1m4 0h1m2 0h3m2 0h1m1 0h1m2 0h1M0 14.5h1m1 0h2m2 0h2m5 0h4m2 0h1m1 0h1m2 0h1m3 0h1m2 0h1m1 0h1m1 0h1M0 15.5h2m1 0h2m3 0h1m1 0h1m1 0h2m2 0h1m2 0h2m1 0h3m3 0h1m1 0h1m2 0h2m1 0h1M0 16.5h3m1 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h5m2 0h5m2 0h1m1 0h2m1 0h1M0 17.5h1m4 0h1m1 0h1m1 0h4m1 0h1m3 0h2m3 0h5m1 0h3m1 0h1M3 18.5h4m1 0h1m4 0h1m2 0h3m4 0h1m1 0h12M1 19.5h1m3 0h1m1 0h2m2 0h1m2 0h3m1 0h1m1 0h1m3 0h5m1 0h4m2 0h1M1 20.5h2m2 0h4m3 0h1m4 0h1m6 0h5m1 0h2m1 0h1m2 0h1M1 21.5h5m4 0h6m1 0h3m2 0h2m2 0h1m1 0h4m2 0h1m1 0h1M0 22.5h5m1 0h3m4 0h3m4 0h2m1 0h2m1 0h1m5 0h1m1 0h1M2 23.5h1m1 0h2m2 0h1m3 0h1m1 0h2m2 0h1m1 0h1m2 0h1m1 0h2m1 0h5m1 0h3M6 24.5h8m1 0h1m1 0h1m2 0h1m3 0h2m8 0h1M0 25.5h3m1 0h1m2 0h1m3 0h4m2 0h4m1 0h1m1 0h4m2 0h1m1 0h4M0 26.5h10m4 0h2m4 0h1m1 0h1m1 0h1m1 0h3m1 0h4m2 0h1M0 27.5h1m9 0h2m2 0h1m1 0h1m1 0h2m2 0h5m1 0h2m2 0h3m1 0h1M0 28.5h1m2 0h4m3 0h1m2 0h3m3 0h2m1 0h3m2 0h8m1 0h1M8 29.5h1m1 0h3m4 0h2m1 0h3m2 0h1m2 0h1m3 0h1m1 0h2M0 30.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h3m1 0h2m1 0h2m1 0h1m1 0h1m1 0h1m1 0h3m1 0h1M0 31.5h1m5 0h1m1 0h1m2 0h5m4 0h6m2 0h1m3 0h1m3 0h1M0 32.5h1m1 0h3m1 0h1m1 0h2m1 0h1m1 0h2m1 0h1m1 0h3m1 0h1m1 0h2m1 0h7M0 33.5h1m1 0h3m1 0h1m1 0h1m4 0h1m8 0h4m1 0h1m2 0h2m1 0h2m1 0h1M0 34.5h1m1 0h3m1 0h1m2 0h1m1 0h1m2 0h1m2 0h4m1 0h1m3 0h2m2 0h1m1 0h2m1 0h2M0 35.5h1m5 0h1m6 0h1m1 0h1m1 0h2m1 0h1m1 0h4m7 0h1m1 0h2M0 36.5h7m1 0h3m1 0h1m1 0h1m1 0h1m2 0h1m4 0h2m1 0h8m1 0h1"></path></svg>
      </div>
    </Wrapper>
  )
}

export default Footer

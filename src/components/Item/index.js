import styled from 'styled-components'
import moment from 'moment'
import Sparkline from 'react-sparkline'

const Card = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  width: 100%;
  color: inherit;
  background: ${props => props.ai ? '#e5f0fc' : '#FFF'};
  padding: 0.5em 0.5em;
  margin: 0.5em auto;
  box-shadow: 0 0.35em 1em 0.1em rgba(0,0,0,0.08);
  border-radius: 3px;
  transition: all 0.25s ease;
  &:hover{
    background: var(--light-color);
  }
`

const CardWrapper = styled.div`
  position: relative;
  display: grid;
  grid-gap: 3px;
  grid-template-columns: 2fr 3fr;
  & p{
    margin: 0;
    color: rgba(0,0,0,0.5);
    font-size: 80%;
  }
`

const CardBody = styled.main`
  grid-column: 2 / 3;
  grid-row: 1 / 4;
  text-align: right;
`

const CardTitle = styled.header`
  grid-column: ${props => props.manual ? '1 / 3' : '1 / 2'};
  grid-row: 1;
  color: var(--dark-color);
  font-weight: 500;
  & h4.card_title{
    margin: 0.5em auto;
  }
`

const CardSpecs = styled.div`
  display: flex;
  flex-flow: column;
`

const CardFooter = styled.footer`
  grid-column: 1 / 2;
  grid-row: 3 / 3;
`

const CardGraph = styled.div`
  grid-column: ${props => props.manual ? '1 / 3' : '1 / 2'};
  grid-row: 2 / 3;
  & p{
    margin: 1em;
    color: rgba(0,0,0,0.5);
  }
`


const Item = ({name, pair, sparkData, url, ...props}) => {
  return (
    <Card href={url} target='_blank' ai={props.ai ? true : false}>
      <CardWrapper href={url}>
        <CardTitle manual={props.manual}>
          <h4 class='card_title'>{props.manual ? 'If you find this tool helpful and want to support my work, you can donate to:' : name} <span></span> </h4>
          {props.ai && <p>AI Signal</p>}
        </CardTitle>
        <CardGraph manual={props.manual}>
          {props.manual && <div>
            <p>BTC: 3Fs51ccC854seUbbxR59k4Mph8BG64AC3Y</p>
            <p>ETH: 0xb4E617BC39c7a796a06515DA166305b78aeAF345</p>
            <p>LTC: LVFsWKJgMtY9F4kVXiZ9MD4xmNK3PaepLT</p>
          </div>}
          <Sparkline strokeWidth='2px' strokeColor='var(--primary-color)' interpolate='cardinal' circleDiameter='0' data={sparkData.slice(-20)}/>
        </CardGraph>
        <CardBody>
          {!props.manual && !props.ai && <CardSpecs>
            <p>{`Last 1h Closed @ ${pair.close}`}</p>
            <p>{`RSI: ${pair.rsi}`}</p>
            <p>{`MFI: ${pair.mfi}`}</p>
            <p>{`RVOL: ${pair.vol}`}</p>
          </CardSpecs>}
          {props.ai && <CardSpecs>
            <p>{`AI action: ${pair.action === 0 ? 'Buy' : 'Sell'}`}</p>
            <p>{`AI probabilty: ${(pair.actionProb * 100).toFixed(0)}%`}</p>
            <p>{`Last 1h Closed @ ${sparkData[sparkData.length - 1]}`}</p>
          </CardSpecs>}
        </CardBody>
        <CardFooter>
          {!props.manual && <p>{moment(pair.timestamp).fromNow()}</p>}
        </CardFooter>
      </CardWrapper>
    </Card>
  )
}

export default Item

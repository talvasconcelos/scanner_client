import styled from 'styled-components'
import moment from 'moment'
import Sparkline from 'react-sparkline'

const Card = styled.a`
  position: relative;
  display: block;
  text-decoration: none;
  width: 100%;
  color: inherit;
  background: #FFF;
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
  grid-column: 1 / 2;
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
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`


const Item = ({name, pair, sparkData, url}) => {
  return (
    <Card href={url} target='_blank'>
      <CardWrapper href={url}>
        <CardTitle>
          <h4 class='card_title'>{name}</h4>
        </CardTitle>
        <CardGraph>
          <Sparkline strokeWidth='2px' strokeColor='var(--primary-color)' interpolate='cardinal' circleDiameter='0' data={sparkData.slice(-20)}/>
        </CardGraph>
        <CardBody>
          <CardSpecs>
            <p>{`Closed @${pair.close}`}</p>
            <p>{`RSI: ${pair.rsi}`}</p>
            <p>{`MFI: ${pair.mfi}`}</p>
            <p>{`RVOL: ${pair.vol}`}</p>
          </CardSpecs>
        </CardBody>
        <CardFooter>
          <p>{moment(pair.timestamp).fromNow()}</p>
        </CardFooter>
      </CardWrapper>
    </Card>
  )
}

export default Item

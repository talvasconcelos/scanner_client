import styled from 'styled-components'
import moment from 'moment'

const Card = styled.a`
  text-decoration: none;
  color: inherit;
`

const CardBody = styled.div`
  position: relative;
  background: #FFF;
  padding: 0.5em 0.5em;
  margin: 0.5em auto;
  box-shadow: 0 0.35em 1em 0.1em rgba(0,0,0,0.08);
  border-radius: 3px;
  cursor: pointer;
  &:hover{
    box-shadow: 0 0.55em 1em 0.15em rgba(0,0,0,0.06);
  }
  & h4.card_title{
    color: var(--dark-color);
    font-weight: 400;
    margin: 0.5em auto;
  }
  & small{
    color: rgba(0,0,0,0.5);
    font-size: 75%;
  }
`


const Item = ({pair, url}) => {
  return (
    <Card href={url} target='_blank'>
      <CardBody href={url}>
        <h4 class='card_title'>{pair.pair}</h4>
        <small>
          <span>{`Closed @${pair.close} | RSI: ${pair.rsi}`}</span>
        </small>
      </CardBody>
    </Card>
  )
}

export default Item

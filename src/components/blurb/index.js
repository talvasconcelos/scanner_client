import styled from 'styled-components'

const Block = styled.div`
  width: 90%;
  max-width: 960px;
  margin: 3em auto;
  & h2{
    color: var(--dark-color);
  }
  & p:first-of-type {
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    column-count: 2
    column-gap: 3em;
    & h2{
      column-span: all;
    }
	}
`

const Blurb = ({children, title}) => {
  return (
    <Block>
      <h2>{title}</h2>
      {children}
    </Block>
  )
}

export default Blurb

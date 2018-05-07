import styled from 'styled-components'

const Wrapper = styled.footer`
  left: 0;
  bottom: 0;
  width: 100%;
  height: 300px;
  background: red;
`

const Phantom = styled.div`
  display: block;
  padding: 20px;
  height: 60px;
  width: 100;
`


const Footer = ({children, title}) => {
  return (
    <div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, mollitia! Ut, esse aut! Assumenda quasi accusamus nobis, dolorum error vero provident, reiciendis debitis mollitia ullam explicabo repellat eaque quibusdam quod minima illo voluptatem aliquid. Illo quas, eligendi nobis. Sint odio reprehenderit eius impedit autem blanditiis ipsum ullam facilis ex placeat, optio doloremque non quas ipsam, veniam velit quidem officiis fuga quod quasi. Ullam quis ab odio pariatur ratione incidunt quos, ipsa. Beatae commodi perspiciatis, nostrum. Doloribus vero, fuga obcaecati repellat debitis ipsum voluptas reiciendis optio minus sed, suscipit sit, culpa doloremque numquam sequi tenetur perspiciatis a aperiam quam modi, quo!</p>
    
    </div>
  )
}

export default Footer

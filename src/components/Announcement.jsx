import styled from "styled-components"

const Container=styled.div`
height: 30px;
background-color:brown;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: bold;
`

const Announcement = () => {
  return (
    <Container>
        Free Shipping on orders over Rs 700
    </Container>
  )
}

export default Announcement
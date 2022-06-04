import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container=styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:coral;
border-radius: 50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top:0;
bottom: 0;
left:${props=> props.direction === "left" && "10px" };
right:${props=> props.direction === "right" && "10px" };
margin: auto;
cursor:pointer;
`
const Wrapper=styled.div`
height: 100%;
`
const Slide=styled.div`
display:flex;
align-items: center;
`

const ImageCon=styled.div`
flex:1;
`
const Image=styled.img`
`
const InfoCon=styled.div`
flex:1;
`
const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <ImageCon>
                <Image src="https://img101.urbanic.com/goods-pic/219ad8594c37450cb53c01d0e8e210d6_w1000_q90"/>
            </ImageCon>
            <InfoCon></InfoCon>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider
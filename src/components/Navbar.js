import {Nav,Wrapper,Img,H2,H3,H4 } from './styles/Navbar.styled'
export default function Navbar(){
      return(
            <Nav>
                  
                  <Wrapper>
                        <Img src={`${process.env.PUBLIC_URL}/images/pngwing.com (1).png`}/>
                        <H2>Meme Generator</H2>
                  </Wrapper>
                  <Wrapper>
                        <H3>React : </H3>
                        <H4> Project 4</H4>
                  </Wrapper>
            </Nav>
      )
}
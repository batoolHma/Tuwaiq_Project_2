import { Container } from "react-bootstrap"
import img from '../images/howtworks.png'
export default function HowTowork(){
    return(
        <div>
            <Container>
            <h3 style={{fontFamily:'fantasy',fontSize:'1cm',color:'#59886B'}}> How Tawakkalna Work</h3>
      <img src={ img}width="100%"/>
  </Container>

        </div>
    )
}
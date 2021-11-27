import React from "react";
import { Carousel, Container } from "react-bootstrap";
import About from './about'
import crosal3 from '../images/crosal3.png'
import crosal2 from '../images/crosal2.png'
import crosal1 from '../images/crosal1.png'
const Main = () => {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-100 "
           
            src={crosal3}
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100 h-100"
            src={crosal2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100 h-100"
            src={crosal1}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <hr style={{color:'white'}}/>
      <br/>
    
    </div>
  );
};

export default Main;

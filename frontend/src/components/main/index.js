import React from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {
  return (
    <div className="App">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-70 "
            src="https://ta.sdaia.gov.sa/images/hero.png"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://saudigazette.com.sa/uploads/images/2021/01/31/1735234.jpeg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50"
            src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <img src="..../images/howtworks.png"/> //stilllll how to
    
    </div>
  );
};

export default Main;

import React from 'react';
import {Navbar,Nav , Container,Button} from 'react-bootstrap';
const Header = () => {
	return <div className="App">
	
	<Navbar bg="light" variant="light">
    <Container>
		<img src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg" width="100px" height="100px"
		/>
    
    <Nav className="me-auto">
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="about">About Tawakklna</Nav.Link>
      <Nav.Link href="htw">How Tawakklna works</Nav.Link>
      <Nav.Link href="/">Contact Us</Nav.Link>
      
      <Button  href="login"type="submit" style={{backgroundColor:"#A20A0A",color:"white"}}>Login</Button>
    </Nav>
    </Container>
  </Navbar>
	
	
	</div>;
};

export default Header;

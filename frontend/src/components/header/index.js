import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.css'
const Header = () => {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <img
            src="https://ta.sdaia.gov.sa/images/NewImages/logo.svg"
            width="100px"
            height="100px"
          />

          <Nav className="me-auto">
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "gray" }} to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/about"
              >
                About Tawakklna
              </Link>
            </Nav.Link>
            <Nav.Link>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "gray" }}
                to="/htwork"
              >
                How Tawakklna works
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link style={{ textDecoration: "none", color: "gray" }} to="cus">
                Contact Us
              </Link>
            </Nav.Link>

            <Button className='login-btn'
              style={{ backgroundColor: "#105652" }}
              href="login"
              type="submit"
            >
              Login
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

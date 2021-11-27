import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

export default function LogIn() {
  const [userName, setuserName] = useState("");
  const [passWord, setpassWord] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      
      userName: userName,
      passWord: passWord,
    };
    console.log(data);
    axios
      .post("user/login/", data)
      .then((res) => {
        console.log(res);
        navigate('/afterLogin ', { state: { id:res.data.id} });

        // navigate("/afterLogin");
      })
      .catch((err) => {
        console.log(err.response.data);
        console.log(
          "invalid user name or password are wrong please try again:"
        );
      });
  }

  return (
    <div className="Login">
      <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <div className="row">
              {" "}
              <img
                id="logo"
                src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
              />
            </div>
            <div className="row">
              <div className="col">Login</div>
              <div className="col">
                {" "}
                <Link to="/signup" id="link">
                  sing up{" "}
                </Link>{" "}
              </div>{" "}
            </div>
            <Form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <Form.Group className="mb-3" controlId="">
                <Form.Label> Enter User Name </Form.Label>
                <Form.Control
                  type="id"
                  placeholder=" user name"
                  onChange={(event) => {
                    setuserName(event.target.value);
                  }}
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>PassWord</Form.Label>
                <Form.Control
                  type="passWord"
                  placeholder="Password"
                  onChange={(event) => {
                    setpassWord(event.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                LogIn
              </Button>
            </Form>
          </Col>
          <Col xs={{ order: 1 }}></Col>
        </Row>
      </Container>
    </div>
  );
}

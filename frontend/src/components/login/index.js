import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";

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

    axios
      .post("user/login/", data)
      .then((res) => {
        navigate("/afterLogin ", { state: { id: res.data.id } });
        localStorage.setItem("userId", res.data.id);
      })
      .catch((err) => {
        swal("User Name Or Password Are Wrong", "Try Again", "error");
      });
  }

  return (
    <div
      style={{ border: "solid", color: "white", backgroundColor: "#CDF2CA" }}
      className="Login"
    >
      <Container>
        <Row>
          <Col xs></Col>
          <Col xs={{ order: 12 }}>
            <div className="row">
              {" "}
              <img
                id="logo"
                width="2px"
                src="https://tawakkalna.sdaia.gov.sa/assets/img/illustrations/twlogo.png"
              />
            </div>
            <div className="row">
              <div style={{ color: "black" }} className="col">
                Login
              </div>
              <div className="col">
                {" "}
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/signup"
                  id="link"
                >
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
                <Form.Label style={{ color: "black" }}>
                  {" "}
                  Enter User Name{" "}
                </Form.Label>
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
                <Form.Label style={{ color: "black" }}>PassWord</Form.Label>
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
              <Button
                style={{ backgroundColor: "#105652", alignItems: "center" }}
                variant="primary"
                type="submit"
              >
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

import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const [userName, setuserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [NationalId, setNationalId] = useState("");
  const navigate = useNavigate();
  function validateForm() {
    return userName.length > 0 && passWord.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      userName: userName,
      passWord: passWord,
      NationalId: NationalId,
    };
    axios
      .post("http://localhost:5000/user/user", data)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        console.log(
          "invalid user name or password are wrong please try again:"
        );
      });
  }

  return (
    <div className="signUp">
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="userName">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={(event) => setuserName(event.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="userName">
              <Form.Label>National Id</Form.Label>
              <Form.Control
                type="text"
                value={NationalId}
                onChange={(event) => setNationalId(event.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>PassWord</Form.Label>
              <Form.Control
                type="password"
                value={passWord}
                onChange={(event) => setPassword(event.target.value)}
              />
            </Form.Group>
            <Button  size="lg" type="submit" disabled={!validateForm()}>
              sign Up
            </Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

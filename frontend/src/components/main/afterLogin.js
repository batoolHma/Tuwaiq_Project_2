import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import Navigation from "../navigation";
import { useNavigate, useLocation } from "react-router-dom";
import img from '../images/helthstatus.png'
//date changeing
const current = new Date();
const date = `Date: ${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}Time: ${current.getHours()}
/${current.getMinutes()}/${current.getSeconds()}`;
const NextMain = () => {
  //userinfo
  const state = useLocation();
  // console.log("inside: after login page!: "+state.id);
  // if(state){

  // }
  const [user, setUser] = useState([]);
  // const [drivingLicense,setDrivingLicense]=useState({});

  const userId = state && state.state && state.state.id;

  // const data= {id:userId}
  console.log(userId);
  const navigate = useNavigate();
  useEffect(async () => {
    const userId1 = await localStorage.getItem("userId");
    const data = { id: userId1 };

    console.log(userId1);
    if (userId1) {
      axios

        .post("/user/info", data)

        .then((res) => {
          console.log(res);
          setUser(res.data);
          
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }
  }, []);

  return (
    <div >
      <Container>
      <Container>
      <Row>
     
        <Col>

        <Navigation />
        </Col>
       <Col  >
          <Card>
            <Card.Body>
              <Col>
                <p>Name:</p>
                <h3>{user.userName}</h3>
              </Col>
              <Col>
                {""}
                <p>National ID Number:</p>
                <h3>{user.NationalId}</h3>
              </Col>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card
          style={{
            width: "15rem",
           
            backgroundColor: "#1b5e20",
            borderRadius: "5px",
            marginInline: "60px",
          }}
        >
          <Card.Img
            variant="top"
            style={{ width: "150px" }}
            src="https://3.bp.blogspot.com/-E8vdU98Meoc/VHqLBjQ6WPI/AAAAAAAABoI/RTJVpcl2ZAM/s640/%D8%AA%D9%86%D8%B2%D9%8A%D9%84.png"
          />
          <Card.Body>
            <Card.Title style={{ color: "white" }}>
              {" "}
              last update:{date}
            </Card.Title>
          </Card.Body>
          
         
        </Card>
      </Col>
      </Row>
      </Container>
      <Container>
      <Row>
      <Col></Col>
      <Col> <Card>
            <Card.Body>
              <Col>
                {""}
                <p>NO THING IS HERE YET.</p>
              </Col>
            </Card.Body>
          </Card></Col>
      <Col>
        <img src={img} />
        </Col>
    
        
        </Row>
</Container>


       
      </Container>
    </div>
  );
};
export default NextMain;

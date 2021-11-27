import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Card, Container, Row } from "react-bootstrap";
import Navigation from "../navigation";
import { useLocation } from "react-router-dom";
import { useNavigate} from "react-router-dom";
//date changeing
const current = new Date();
const date = `Date: ${current.getDate()}/${
  current.getMonth() + 1
}/${current.getFullYear()}Time: ${current.getHours()}
/${current.getMinutes()}/${current.getSeconds()}`;
const NextMain = () => {
  //userinfo
  const state=useLocation();

  const [user, setUser] = useState([]);
  const [drivingLicense,setDrivingLicense]=useState({});

    const userId = state.id;
    const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("user/", userId)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        setDrivingLicense(res.data.drivingLicense)
        navigate('dashbord ', { state: { id:res.data.id} });

        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div  style={{display:"grid", gridTemplateColumns :"1fr 1fr 1fr"}}>
        <Row>
      <Navigation />
      </Row>
      
        <Row>
         
          <Col md={20}>
            <Card>
              <Card.Body>
               
                  <Col>
                    <p>Name:</p>
                    <h3>{user.userName}</h3>
                  </Col>
                  <Col>
                    {""}
                    <p>National ID Number:</p>
                    <h3>{user.nationalId}</h3>
                  </Col>
                
              </Card.Body>
            </Card>
          </Col>
          <Col md={20}>
            <Card>
              <Card.Body>
               
                 
                  <Col>
                    {""}
                    <p>NO THING IS HERE YET.</p>
                    
                  </Col>
                
              </Card.Body>
            </Card>
          </Col>
          </Row>
          
         
          <Col>
            <Card
              style={{
                width: "20rem",
                backgroundColor: "#1b5e20",
                borderRadius: "5px",
                marginInline: "130px",
              }}
            >
              <Card.Img
                variant="top"
                style={{ width: "150px" }}
                src="https://3.bp.blogspot.com/-E8vdU98Meoc/VHqLBjQ6WPI/AAAAAAAABoI/RTJVpcl2ZAM/s640/%D8%AA%D9%86%D8%B2%D9%8A%D9%84.png"
              />
              <Card.Body>
                <Card.Title style={{color:"white"}}> last update:{date}</Card.Title>
                
              </Card.Body>
            </Card>
          </Col>
        
      
    </div>
  );
};
export default NextMain;

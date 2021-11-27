import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import "./dashboard.css";
import Navigation from "../navigation/index";
//photo
import img1 from '../images/cars.png'
import img2 from '../images/attor.png'
import img3 from '../images/license1.png'
import img4 from '../images/appointment.png'
import img5 from '../images/commerical.png'
import img6 from '../images/passport.png'
import img7 from '../images/insurecars.png'
import img8 from '../images/mydeeds.png'
import img9 from '../images/nationaladres.png'
import img10 from '../images/qias.png'
import img11 from '../images/traficviolation.png'


export default function Dashboard() {
  const {state} = useLocation();
  console.log(state);
  const userId = state.Id;
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios({
      method: "POST",
      url: "user/info/dash",
      data: {
        id: userId,
      },
    })
      .then((res) => {
        setData(res.data);
        navigate('dashboard ', { state: { id:res.data.id} });
        //  navigate('dashbord ', { state: { id:res.data.id} });
         navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);

  return (
    <div >
      <Navigation />
<Container>
        <Row>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img width="50px"src={img1}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Vehicales
                </Card.Title>
                <Card.Text>
                Vehicales count
                </Card.Text>
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img3}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Number of license
                </Card.Title>
                <Card.Text>
               1
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img7}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Vehicales Insurance
                </Card.Title>
                <Card.Text>
                Insurance Documents
                </Card.Text>
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </Container>
     <Container>
        <Row>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img width="50px" src={img11}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Traffic Violations
                </Card.Title>
                <Card.Text>
                Violations count
                </Card.Text>
                <Card.Text>
                  0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img6}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Passports
                </Card.Title>
                <Card.Text>
                Passports count
                </Card.Text>
                <Card.Text>
                  0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img4}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                Appointment
                </Card.Title>
                <Card.Text>
                Unavailable
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </Container>
     <Container>
        <Row>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img width="50px" src={img9}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                National Address
                </Card.Title>
                <Card.Text>
               Registered Addresses
                </Card.Text>
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img8}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 My Deeds
                </Card.Title>
                <Card.Text>
                Registered Deeds
                </Card.Text>
                <Card.Text>
                0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img10}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                Qiyas Exams Results
                </Card.Title>
                <Card.Text>
               Qiyas Test
                </Card.Text>
                <Card.Text>
                  0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     </Container>
     <Container>
        <Row>
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
                <img width="50px" src={img2}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                 Attorneys
                </Card.Title>
                <Card.Text>
                Registered   Attorneys
                </Card.Text>
                <Card.Text>
                  0
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
              <img width="50px" src={img5}/>
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}>
                Commerical Registration
                </Card.Title>
                <Card.Text>
                Vehicales count
                </Card.Text>
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="card" style={{ width: "18rem" }}>
              <Card.Body>
             
                <hr />
                <Card.Title style={{color:'#01937C',textAlign:"center"}}> International travel record</Card.Title>
                <Card.Text>
                 International travel record
                </Card.Text>
              
                <Card.Text>
                  1
                </Card.Text>
              </Card.Body>
             
            </Card>
          </Col>
        </Row>
     </Container>
 
    </div>
  );
}

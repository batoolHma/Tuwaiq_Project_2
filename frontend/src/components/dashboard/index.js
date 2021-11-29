import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./dashboard.css";
import Navigation from "../navigation/index";
//photo
import img1 from "../images/cars.png";
import img2 from "../images/attor.png";
import img3 from "../images/license1.png";
import img4 from "../images/appointment.png";
import img5 from "../images/commerical.png";
import img6 from "../images/passport.png";
import img7 from "../images/insurecars.png";
import img8 from "../images/mydeeds.png";
import img9 from "../images/nationaladres.png";
import img10 from "../images/qias.png";
import img11 from "../images/traficviolation.png";

export default function Dashboard() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(async () => {
    const userId = await localStorage.getItem("userId");

    const params = {
      id: userId,
    };
    if (userId) {
      axios
        .get("user/dashboard", {
          params: params,
        })
        .then((res) => {
          setUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  // get src based on type
  // const getImage = (dashboardItem) => {
  //   if (dashboardItem.id === 1) {
  //     return img2;
  //   }
  //    else if (dashboardItem.id === 2) {

  //     return img1;
  //   }
  //    else if (dashboardItem.id === 3) {
  //     return img6;
  //   } 
    
  //   else if (dashboardItem.id === 4) {
  //     return img9;
  //   } 
  //   else {
  //     return "";
  //   }
  // };

  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          {user &&
            user.dashboard &&
            user.dashboard.map((dashboardItem, index) => (
              <Col key={dashboardItem.id}>
                <Card
                  className="card"
                  style={{ width: "18rem" }}
                  onClick={() => {
                    navigate("/dashinfo ", {
                      state: { dashboardItem: dashboardItem },
                    });
                  }}
                >
                  <Card.Body>
                    <img width="70px" src={getImage(dashboardItem)} />
                    <hr />
                    <Card.Title
                      style={{ color: "#01937C", textAlign: "center" }}
                    >
                      {dashboardItem.title}
                    </Card.Title>
                    {/* <Card.Text>{`${dashboardItem.title}} count`}</Card.Text> */}
                    <Card.Text>{dashboardItem.count}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

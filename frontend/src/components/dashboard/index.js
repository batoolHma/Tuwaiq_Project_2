import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
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

  const images = [
    {
      id: 1,
      src: img3,
    },
    {
      id: 2,
      src: img1,
    },
    {
      id: 3,
      src: img6,
    },
    {
      id: 4,
      src: img9,
    },
    {
      id: 5,
      src: img4,
    },
    {
      id: 6,
      src: img11,
    },
    {
      id: 7,
      src: img8,
    },
    {
      id: 8,
      src: img2,
    },
    {
      id: 9,
      src: img10,
    },
    {
      id: 11,
      src: img5,
    },
    {
      id: 12,
      src: img7,
    },
  ];


  return (
    <div>
      <Navigation />
      <Container>
        <Row>
          {user &&
            user.dashboard &&
            user.dashboard.map((dashboardItem) => (
              <Col key={dashboardItem.id}>
                <Card
                  className="card"
                  style={{ width: "18rem" }}
                  onClick={() => {
                    navigate("/dashinfo "
                    , {
                      state: { dashboardItem: dashboardItem },
                    });
                  }}
                >
                  <Card.Body>
                  <img
                      width="70px"
                      src={
                        images.find(({ id }) => id === dashboardItem.id)?.src
                      }
                    />
                    <hr />
                    <Card.Title
                      style={{ color: "#01937C", textAlign: "center" }}
                    >
                      {dashboardItem.title}
                    </Card.Title>
                    
                    <Card.Text>Count <br/>{dashboardItem.count}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
}

import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
export default function Section2() {
  const [specificCategories, setSpecificCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/electronics")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setSpecificCategories(json);
      });
  }, [specificCategories]);
  return (
    <Container>
      <Row>
        <Col xs={3} style={{ border: "1px solid blue" }}>
          <aside>
            <header>
              <h3>Deals and offers</h3>
              <p>Hygiene equipments</p>
            </header>
            <div className="timer">
              <div>
                <span className="times">04</span> <br />
                <small style={{ color: "#ffff" }}>Days</small>
              </div>
              <div>
                <span className="times">12</span> <br />{" "}
                <small style={{ color: "#ffff" }}>Hours</small>
              </div>
              <div>
                <span className="times">58</span> <br />
                <small style={{ color: "#ffff" }}>Min</small>
              </div>
              <div>
                <span className="times">02</span>
                <br /> <small style={{ color: "#ffff" }}>Sec</small>
              </div>
            </div>
          </aside>
        </Col>
        <Col
          xs={9}
          md={9}
          style={{ border: "1px solid green", display: "flex" }}
        >
          {specificCategories.map((e) => console.log(e))}
          {specificCategories.map((s) => {
            return (
              <Card style={{ width: "18rem", paddingTop: "30px" }}>
                <Card.Img
                  style={{ width: "80%", paddingLeft: "40px" }}
                  variant="top"
                  src={s.image}
                />
                <Card.Body>
                  <Card.Title>{s.title}</Card.Title>
                  <Card.Text>
                    <span style={{ color: "red" }}>-40%</span>{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

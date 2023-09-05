import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Section7() {
  return (
    <Container>
      <Row>Our extra services</Row>
      <Row>
        <Col lg={3} md={6} sm={8}>
          <Card
            style={{ width: "18rem", marginLeft: "10px" }}
            className="d-flex flex-col justify-content-between"
          >
            <Card.Img
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              style={{ height: "150px" }}
            />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "25px",
                top: "120px",
                background: "blue",
              }}
            >
              H
            </div>
            <Card.Body>
              <Card.Title className="text-left">
                Some quick example text to build on the card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={8}>
          <Card
            style={{ width: "18rem", marginLeft: "10px" }}
            className="d-flex flex-col justify-content-between"
          >
            <Card.Img
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              style={{ height: "150px" }}
            />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "25px",
                top: "120px",
                background: "blue",
              }}
            >
              H
            </div>
            <Card.Body>
              <Card.Title className="text-left">
                Some quick example text to build on the card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={6} sm={8}>
          <Card style={{ width: "18rem", marginLeft: "10px" }}>
            <Card.Img
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              style={{ height: "150px" }}
            />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "25px",
                top: "120px",
                background: "blue",
              }}
            >
              H
            </div>
            <Card.Body>
              <Card.Title className="text-left">
                Some quick example text to build on the card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={5} sm={8}>
          <Card style={{ width: "18rem", marginLeft: "10px" }}>
            <Card.Img
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              style={{ height: "150px" }}
            />
            <div
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                position: "absolute",
                right: "25px",
                top: "120px",
                background: "blue",
              }}
            >
              H
            </div>
            <Card.Body>
              <Card.Title className="text-left">
                Some quick example text to build on the card
              </Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

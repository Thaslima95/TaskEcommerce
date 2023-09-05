import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";

export default function Section6() {
  return (
    <Container>
      <Row>Recommended Items</Row>
      <Row>
        {Array.from(Array(6)).map((_, index) => (
          <Col lg={2} md={5} sm={7}>
            <Card
              className="d-flex flex-col justify-content-between"
              style={{ border: "none" }}
            >
              <Card.Body className="">
                <img
                  className="smallimg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  height="300px"
                  width="300px"
                />
                <div className="d-flex flex-row justify-content-start">
                  <div className="mb-3 text-left">
                    Home Appliances <br />
                    From <br />
                    USD 300
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {Array.from(Array(6)).map((_, index) => (
          <Col lg={2} md={5} sm={7}>
            <Card
              className="d-flex flex-col justify-content-between"
              style={{ border: "none" }}
            >
              <Card.Body className="">
                <img
                  className="smallimg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                  height="300px"
                  width="300px"
                />
                <div className="d-flex flex-row justify-content-start">
                  <div className="mb-3 text-left">
                    Home Appliances <br />
                    From <br />
                    USD 300
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

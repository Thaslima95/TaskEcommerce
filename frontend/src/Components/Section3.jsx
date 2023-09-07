import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Section3() {
  return (
    <Container
      style={{
        border: "1px solid red",
        position: "relative",
        top: "1352px",
        left: "180px",
      }}
    >
      <Row>
        <Col xs={3} style={{ border: "2px solid red" }}>
          <Card.Img
            variant="top"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
          />
        </Col>
        <Col xs={9} md={9} style={{ border: "2px solid black" }}>
          <Row>
            {Array.from(Array(4)).map((_, index) => (
              <Col lg={3} md={5} sm={7}>
                <Card className="d-flex flex-col justify-content-start">
                  <Card.Body className="p-0">
                    <div className="d-flex flex-row justify-content-start">
                      <div className="mb-3">
                        Home Appliances <br />
                        From <br />
                        USD 300
                      </div>
                      <img
                        className="smallimg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        height="140px"
                        width="140px"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            {Array.from(Array(4)).map((_, index) => (
              <Col lg={3} md={5} sm={7}>
                <Card className="d-flex flex-col justify-content-start">
                  <Card.Body className="p-0">
                    <div className="d-flex flex-row justify-content-start">
                      <div className="mb-3">
                        Home Appliances <br />
                        From <br />
                        USD 300
                      </div>
                      <img
                        className="smallimg"
                        src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
                        height="140px"
                        width="140px"
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

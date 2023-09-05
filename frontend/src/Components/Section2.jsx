import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Section2() {
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
          <Card style={{ width: "18rem", paddingTop: "30px" }}>
            <Card.Img
              style={{ width: "80%", paddingLeft: "40px" }}
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span style={{ color: "red" }}>-40%</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", paddingTop: "30px" }}>
            <Card.Img
              style={{ width: "80%", paddingLeft: "40px" }}
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span style={{ color: "red" }}>-40%</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", paddingTop: "30px" }}>
            <Card.Img
              style={{ width: "80%", paddingLeft: "40px" }}
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span style={{ color: "red" }}>-40%</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", paddingTop: "30px" }}>
            <Card.Img
              style={{ width: "80%", paddingLeft: "40px" }}
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span style={{ color: "red" }}>-40%</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", paddingTop: "30px" }}>
            <Card.Img
              style={{ width: "80%", paddingLeft: "40px" }}
              variant="top"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                <span style={{ color: "red" }}>-40%</span>{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

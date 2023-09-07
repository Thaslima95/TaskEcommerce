import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SvgComponent from "./SvgComponent";
import { Typography } from "@mui/material";

export default function Section7() {
  return (
    <Container
      style={{
        width: "1180px",
        height: "256px",
        top: "2582px",
        left: "130px",
        position: "absolute",
      }}
    >
      <Card.Title
        style={{
          width: "210px",
          height: "32px",
          // top: 2582px
          // left: 130px
        }}
      >
        <Typography
          style={{
            //styleName: Title-H3;
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
            color: "#1C1C1C",
          }}
        >
          Our extra services
        </Typography>
      </Card.Title>
      <Col style={{ display: "flex", gap: "10px" }}>
        <Card
          style={{
            width: "280px",
            height: "200px",
            // top: 2638px
            // left: 130px
            border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "148px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
            }}
          >
            <Typography
              style={{
                //styleName: Text-title;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Source from <br />
              Industry Hubs
            </Typography>
          </Card>
        </Card>
        <Card
          style={{
            width: "280px",
            height: "200px",
            // top: 2638px
            // left: 130px
            border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "148px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
            }}
          >
            <Typography
              style={{
                //styleName: Text-title;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Source from <br />
              Industry Hubs
            </Typography>
          </Card>
        </Card>
        <Card
          style={{
            width: "280px",
            height: "200px",
            // top: 2638px
            // left: 130px
            border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "148px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
            }}
          >
            <Typography
              style={{
                //styleName: Text-title;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Source from <br />
              Industry Hubs
            </Typography>
          </Card>
        </Card>
        <Card
          style={{
            width: "280px",
            height: "200px",
            // top: 2638px
            // left: 130px
            border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "148px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
            }}
          >
            <Typography
              style={{
                //styleName: Text-title;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "500",
                lineHeight: "22px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Source from <br />
              Industry Hubs
            </Typography>
          </Card>
        </Card>
      </Col>
      {/* <Row>Our extra services</Row>
      <Row>
        <Col lg={3} md={6} sm={8}>
          <Card
            style={{ width: "18rem", marginLeft: "10px" }}
            className="d-flex flex-col justify-content-between"
          >
            <Card.Img
              variant="top"
              src={<SvgComponent />}
              style={{ height: "150px" }}
            />
            <SvgComponent />
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
      </Row> */}
    </Container>
  );
}

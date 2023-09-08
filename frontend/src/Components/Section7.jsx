import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SvgComponent from "./SvgComponent";
import { Typography } from "@mui/material";
import Two from "../2.jpg";
import Three from "../3.jpg";
import Four from "../4.jpg";
import Five from "../5.jpg";

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
            // border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
            src={Two}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "95px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
              borderRadius: "50%",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
              border: "none",
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
            // border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
            src={Three}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "95px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
              borderRadius: "50%",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
              border: "none",
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
            // border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
            src={Five}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "95px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
              borderRadius: "50%",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
              border: "none",
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
            // border: "1px solid green",
          }}
        >
          <Card.Img
            style={{
              width: "280px",
              height: "120px",
              // top: 2638px
              // left: 130px
            }}
            src={Four}
          />
          <Card
            style={{
              width: "55px",
              height: "55px",
              // top: 2730px
              top: "95px",
              left: "204px",
              position: "absolute",
              // left: 334px
              border: "2px solid brown",
              borderRadius: "50%",
            }}
          ></Card>
          <Card
            style={{
              width: "215px",
              height: "44px",
              // top: 2774px
              // left: 150px
              border: "none",
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
    </Container>
  );
}

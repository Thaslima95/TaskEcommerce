import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainImg from "../../Images/main-tech.png";
import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import ListComponent from "../../Components/ListComponent/ListComponent";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
export default function HomePageSection1() {
  const [categories, setCategories] = useState([]);

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container
      style={{
        position: "absolute",
        top: "162px",
        left: "130px",
        width: "1180px",
        height: "400px",
        // border: "1px solid red",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Row>
        <Col
          lg={2}
          style={{
            // border: "1px solid red",
            width: "250px",
            height: "360px",
          }}
        >
          {categories.map((c) => {
            return <ListComponent category={c} />;
          })}
        </Col>
        <Col
          lg={7}
          md="auto"
          style={{
            width: "665px",
            height: "360px",

            position: "relative",
          }}
        >
          <a href="#">
            <Card.Img
              style={{
                width: "664px",
                height: "373px",
              }}
              variant="top"
              src={MainImg}
            />
          </a>
          <Col style={{ poisition: "absolute", top: "50px" }}></Col>
        </Col>

        <Col lg={2}>
          <Col
            style={{
              width: "200px",
              height: "150px",
              borderRadius: "6px",
              backgroundColor: "#E3F0FF",
            }}
          >
            <Col
              style={{
                width: "112px",
                height: "38px",
                left: "1000px",
                top: "650",
                position: "absolute",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Hi, user let’s get stated
              </Typography>
            </Col>
            <Col
              style={{
                width: "180px",
                height: "30px",

                padding: "0px 10px 0px 10px",
                borderRadius: "6px",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  width: "180px",
                  height: "30px",
                  top: "100px",
                  left: "920px",
                  position: "absolute",
                  padding: "0px 10px 0px 10px",
                  borderRadius: "6px",
                  gap: "10px",

                  background: "blue",
                }}
                Content="btn-text"
                Color="primary"
              >
                Join
              </Button>
            </Col>
            <Col
              style={{
                width: "180px",
                height: "30px",

                padding: "0px 10px 0px 10px",
                borderRadius: "6px",
                gap: "10px",
              }}
            >
              <Button
                style={{
                  width: "180px",
                  height: "30px",

                  top: "75px",
                  left: "920px",
                  padding: "0px 10px 0px 10px",
                  borderRadius: "6px",
                  gap: "10px",
                  // border: "1px solid green",
                  background: "blue",
                  position: "absolute",
                }}
                Content="btn-text"
                Color="primary"
              >
                Log In
              </Button>
            </Col>
          </Col>

          <Col
            style={{
              width: "200px",
              height: "95px",
              background: " #F38332",
              borderRadius: "6px",
            }}
          >
            <Col
              style={{
                width: "144px",
                height: "57px",
              }}
            >
              <Typography
                style={{
                  //styleName: Text-base;
                  fontFamily: " Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19px",
                  letterSpacing: "0px",
                  textAlign: "left",
                  color: "#FFFFFF",
                }}
              >
                Get US $10 off with a new supplier
              </Typography>
            </Col>
          </Col>
          <Col
            style={{
              width: "200px",
              height: "95px",
              background: "#55BDC3",

              borderRadius: "6px",
            }}
          >
            <Col
              style={{
                width: "140px",
                height: "57px",
                // top: "463px",
                // left: "1106px",
                // position: "relative",
              }}
            >
              <Typography
                style={{
                  //styleName: Text-base;
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "19px",
                  letterSpacing: "0px",
                  textAlign: "left",
                  color: " #FFFFFF",
                }}
              >
                Send quotes with supplier preferences
              </Typography>
            </Col>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}

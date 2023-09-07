import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function Section3() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setValue(json));
  }, [value]);
  return (
    <Container
      style={{
        width: "1180px",
        height: "257px",
        top: "852px",
        left: "130px",
        position: "absolute",
        border: "1px solid red",
        display: "flex",
      }}
    >
      <Col
        lg={3}
        style={{
          width: "280px",
          height: "257px",

          border: "8px solid red",
        }}
      ></Col>
      <Col
        style={{ border: "1px solid green", display: "flex", flexWrap: "wrap" }}
      >
        {value.map((e) => {
          return (
            <Col
              style={{
                width: "223px",
                height: "127px",
                // top: "855px",
                // left: "410px",
                // position: "absolute",
                border: "2px solid blue",
                margin: "0px",
                padding: "0px",
              }}
            >
              <Card
                style={{
                  width: " 138px",
                  height: " 19px",
                  top: "20px",
                  left: "16px",
                  margin: "0px",
                  padding: "0px",
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
                    color: "#1C1C1C",
                  }}
                >
                  {e.category}
                </Typography>
              </Card>
              <Card
                style={{
                  width: "97.9532699584961px",
                  height: "32px",
                  top: "48px",
                  left: "16px",
                  position: "relative",
                  margin: "0px",
                  padding: "0px",
                }}
              >
                <Typography
                  style={{
                    //styleName: Text-small;
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: "400",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  From USD {e.price}
                </Typography>
              </Card>
              <Card
                style={{
                  width: "82px",
                  height: "82px",
                  top: "-3px",
                  left: "140px",
                  position: "relative",
                  padding:
                    "6.559999942779541px 7.6533379554748535px 6.195554256439209px 7.6533331871032715px",
                }}
              >
                <Card.Img
                  style={{
                    width: "66.69332885742188px",
                    height: "69.24444580078125px",
                    top: "6.56005859375px",
                    left: "7.6533203125px",
                    position: "relative",
                  }}
                  src={e.image}
                />
              </Card>
            </Col>
          );
        })}
      </Col>
    </Container>
  );
}

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Typography } from "@mui/material";
import { useState } from "react";
import tech from "../../Images/tech.jpg";
import ApiCalls from "../../API/ApiCalls";
import { useMemo } from "react";
export default function HomePageSection4() {
  const [value, setValue] = useState([]);
  useMemo(() => {
    ApiCalls.getProductswithdesclimit()
      .then((res) => setValue(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container
      style={{
        width: "1180px",
        height: "257px",
        top: "1129px",
        left: "130px",
        position: "absolute",
        // border: "1px solid red",
        display: "flex",
      }}
    >
      <Col
        lg={3}
        style={{
          width: "280px",
          height: "257px",
          // border: "8px solid red",
        }}
      >
        <Card.Img style={{}} src={tech} />
      </Col>
      <Col style={{ display: "flex", flexWrap: "wrap" }} lg={10}>
        {value.map((e) => {
          return (
            <Col
              lg={3}
              style={{
                width: "223px",
                height: "127px",
                top: "3px",
                left: "0px",
                position: "relative",
                // border: "2px solid blue",
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
                  position: "relative",
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
                  top: "-8px",
                  left: "132px",
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

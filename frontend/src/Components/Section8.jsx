import { Typography } from "@mui/material";
import React from "react";
import { Row, Col, Container, Card } from "react-bootstrap";

export default function Section8() {
  return (
    <Container
      style={{
        width: "1177px",
        height: "138px",
        top: "2868px",
        left: "131px",
        position: "absolute",
      }}
    >
      <Card.Title
        style={{
          width: "221px",
          height: "32px",
          // top: 2868px
          // left: 131px
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
          }}
        >
          Suppliers by region
        </Typography>
      </Card.Title>
      <Col
        style={{
          width: "1177px",
          height: "82px",
          // top: 2924px
          // left: 131px
          border: "1px solid blue",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {["AE", "AU", "US", "RU", "IT", "DK", "FR", "AE", "CN", "GB"].map(
          (e) => {
            return (
              <Card
                style={{
                  width: "221px",
                  height: "36px",
                  // top: 2970px
                  // left: 1087px
                  // position: "relative",
                  display: "flex",
                }}
              >
                <Card.Img
                  style={{
                    width: "28px",
                    height: "20px",
                    top: "8px",
                    position: "relative",
                    border: "1px solid green",
                  }}
                  src={`https://flagsapi.com/${e}/flat/32.png`}
                />

                <Card.Title
                  style={{
                    width: "92px",
                    height: "24px",
                    left: "39px",
                    position: "absolute",
                  }}
                >
                  <Typography
                    style={{
                      //styleName: Text normal;
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.20000000298023224px",
                      textAlign: "left",
                    }}
                  >
                    Great Britain
                  </Typography>
                </Card.Title>
                <Card.Title
                  style={{
                    width: "101px",
                    height: "16px",
                    top: "20px",
                    left: "39px",
                    position: "absolute",
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
                    shopname.co.uk
                  </Typography>
                </Card.Title>
              </Card>
            );
          }
        )}
      </Col>
      {/* <Row>Suppliers by region</Row>
      <Row>
        {["AE", "AU", "US", "RU", "IT", "DK", "FR", "AE", "CN", "GB"].map(
          (e) => {
            return (
              <Col lg={2} md={4} sm={8}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "",
                      border: "1px solid red",
                      height: "70px",
                      margin: "20px",
                    }}
                  >
                    {console.log(e)}
                    <img src={`https://flagsapi.com/${e}/flat/32.png`} />
                    Arabic Emirates <br />
                    shopename.ae
                  </div>
                </div>
              </Col>
            );
          }
        )}
      </Row> */}
    </Container>
  );
}

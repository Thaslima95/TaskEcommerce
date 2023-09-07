import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Typography from "@mui/material/Typography";
export default function Section2() {
  const [categories, setCategories] = useState([]);
  const [specificCategories, setSpecificCategories] = useState([]);
  const spclCategory = [];
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics?limit=5`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setSpecificCategories(json);
      });
  }, [categories]);
  const spclcategories = (value) => {};
  categories.map((e) => spclcategories(e));

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/category/electronics")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setSpecificCategories(json);
  //     });
  // }, [specificCategories]);
  return (
    <Container
      style={{
        width: "1180px",
        height: "240px",
        top: "592px",
        left: "130px",
        borderRadius: "4px",
        position: "absolute",
        border: "1px solid green",
        display: "flex",
      }}
    >
      <Col
        style={{
          width: "198px",
          height: "113px",
          // top: "612px",
          // left: "150px",
          borderRadius: "4px",
          // position: "absolute",
          border: "1px solid brown",
        }}
      >
        <Col style={{ width: "155px", height: "28px" }}>
          <Typography
            style={{
              //styleName: Title-H4;
              fontFamily: " Inter",
              fontSize: " 20px",
              fontWeight: "600",
              lineHeight: "28px",
              letterSpacing: "-0.20000000298023224px",
              textAlign: "left",
            }}
          >
            Deals and Offers
          </Typography>
        </Col>
        <Col style={{ width: "155px", height: "19px" }}>
          <Typography
            style={{
              //styleName: Text-base;
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
              color: " #8B96A5",
            }}
          >
            Hygiene equipments
          </Typography>
        </Col>
        <Col
          style={{
            width: "198px",
            height: "50px",
            display: "flex",
            borderRadius: "4px",
          }}
        >
          <Col
            style={{
              width: "45px",
              height: "50px",
              background: " #606060",

              borderRadius: "4px",
            }}
          >
            <Col style={{ width: "21px", height: "19px" }}>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                56
              </Typography>
            </Col>
            <Col style={{ width: "22px", height: "15px" }}>
              <Typography
                style={{
                  fontFamily: " Inter",
                  fontSize: " 12px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                Sec
              </Typography>
            </Col>
          </Col>
          <Col
            style={{
              width: "45px",
              height: "50px",
              background: " #606060",

              borderRadius: "4px",
            }}
          >
            <Col style={{ width: "21px", height: "19px" }}>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                56
              </Typography>
            </Col>
            <Col style={{ width: "22px", height: "15px" }}>
              <Typography
                style={{
                  fontFamily: " Inter",
                  fontSize: " 12px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                Sec
              </Typography>
            </Col>
          </Col>
          <Col
            style={{
              width: "45px",
              height: "50px",
              background: " #606060",

              borderRadius: "4px",
            }}
          >
            <Col style={{ width: "21px", height: "19px" }}>
              <Typography
                style={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                56
              </Typography>
            </Col>
            <Col style={{ width: "22px", height: "15px" }}>
              <Typography
                style={{
                  fontFamily: " Inter",
                  fontSize: " 12px",
                  fontWeight: "400",
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: " #FFFFFF",
                }}
              >
                Sec
              </Typography>
            </Col>
          </Col>
        </Col>
      </Col>
      <Col style={{ width: "895px", height: " 235px", display: "flex" }}>
        {specificCategories.map((s) => {
          return (
            <Card
              style={{
                width: "179px",
                height: "235px",
                border: "1px solid purple",
              }}
            >
              <Card.Img
                style={{
                  width: "140px",
                  height: "140px",
                  // top: 8px
                  // left: 20px
                  padding:
                    "9.333333015441895px 19.28888511657715px 9.333331108093262px 19.288888931274414px",
                }}
                variant="top"
                src={s.image}
              />
              <Card
                style={{
                  width: " 112px",
                  height: "59px",

                  borderRadius: "29px",
                }}
              >
                <Card style={{ width: "112px", height: "24px" }}>
                  <Typography
                    style={{
                      //styleName: Text normal;
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: "400",
                      lineHeight: "24px",
                      letterSpacing: "-0.20000000298023224px",
                      textAlign: "center",
                    }}
                  >
                    Smart watches
                  </Typography>
                </Card>
                <Card
                  style={{
                    width: "61px",
                    height: "28px",
                    // top: 190px
                    // left: 57px
                    padding: "3px 13px 4px 13px",
                    borderRadius: "29px",
                    gap: "10px",
                  }}
                >
                  <Card style={{ width: "35px", height: "17px" }}>
                    <Typography
                      style={{
                        fontFamily: "Inter",
                        fontSize: "14px",
                        fontWeight: "500",
                        lineHeight: "17px",
                        letterSpacing: "-0.20000000298023224px",
                        textAlign: "center",
                        color: "#EB001B",
                      }}
                    >
                      -25%
                    </Typography>
                  </Card>
                </Card>
              </Card>
            </Card>
          );
        })}
      </Col>
    </Container>
  );
}

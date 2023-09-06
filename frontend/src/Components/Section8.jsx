import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Section8() {
  return (
    <Container>
      <Row>Suppliers by region</Row>
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
      </Row>
    </Container>
  );
}

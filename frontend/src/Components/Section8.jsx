import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Section8() {
  return (
    <Container>
      <Row>
        <Col lg={1} md={5} sm={8}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <img src="https://flagsapi.com/AE/flat/64.png" />
              Arabic Emirates <br />
              <span>shopename.ae</span>
            </div>
            <div>
              Arabic Emirates <br />
              <span>shopename.ae</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

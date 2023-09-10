import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function TextDetailsComponent() {
  return (
    <Container
      style={{
        width: "100%",
        height: "30px",
        top: "20px",
        left: "-16px",
        position: "relative",
        border: "1px solid red",
        display: "flex",
        gap: "30px",
      }}
    >
      <Card.Text style={{ border: "1px solid blue", width: "67px" }}>
        hfhbshbsgj
      </Card.Text>{" "}
      <Card.Text style={{ border: "1px solid green", width: "220px" }}>
        gadh
      </Card.Text>
    </Container>
  );
}

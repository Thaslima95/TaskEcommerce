import React from "react";
import { Card } from "react-bootstrap";

export default function CartComponent() {
  return (
    <Card
      style={{
        width: "840px",
        height: "136px",
        top: "191px",
        left: "150px",
        border: "0px 0px 1px 0px",
        position: "absolute",
        border: "1px solid red",
      }}
    >
      <Card
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "6px",
          border: "1px solid green",
        }}
      ></Card>
    </Card>
  );
}

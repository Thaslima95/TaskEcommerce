import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Col } from "react-bootstrap";
export default function ListComponent({ category }) {
  return (
    <Col
      style={{
        // border: "1px solid green",
        width: "250px",
        height: "40px",
      }}
    >
      <Typography
        style={{
          width: "230px",
          height: "19px",
          fontSize: "16px",
          top: "11px",
          left: "10px",
          position: "relative",
          color: "black",
        }}
      >
        {category[0].toUpperCase() + category.slice(1)}
      </Typography>
    </Col>
  );
}

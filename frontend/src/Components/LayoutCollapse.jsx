import React from "react";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
export default function LayoutCollapse({ title }) {
  return (
    <Card
      style={{
        width: "230px",
        height: "48px",
        top: "208px",
        left: "132px",
        padding: "12px 0px 12px 0px",
        border: "1px 0px 0px 0px",
        position: "absolute",
      }}
    >
      <Card.Text
        style={{
          width: "73px",
          height: "19px",
          top: "14px",
          position: "relative",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H6;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "600",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
          }}
        >
          {title}
        </Typography>
      </Card.Text>
    </Card>
  );
}

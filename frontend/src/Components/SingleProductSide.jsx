import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function SingleProductSide() {
  return (
    <>
      <Container
        style={{
          width: "280px",
          height: "325px",
          top: "226px",
          left: "1008px",
          position: "absolute",
          border: "1px solid red",
        }}
      ></Container>
      <Card
        style={{
          width: "208px",
          height: "48px",
          top: "245px",
          left: "1024px",
          borderRadius: "4px",
          position: "absolute",
        }}
      ></Card>
      <Card.Img
        style={{
          width: "48px",
          height: "48px",
          top: "245px",
          left: "1024px",
          borderRadius: "4px",
          position: "absolute",
        }}
      />
      <Card.Text
        style={{
          width: "61px",
          height: "24px",
          top: "245px",
          left: "1083px",
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
          Supplier
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "149px",
          height: "24px",
          top: "269px",
          left: "1083px",
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
          Guanjoi Trading LLC
        </Typography>
      </Card.Text>
      <Button
        style={{
          width: "248px",
          height: "40px",
          top: "442px",
          left: "1024px",
          borderRadius: "6px",
          position: "absolute",
          background: "#0D6EFD",
        }}
      >
        Send Inquiry
      </Button>
      <Button
        style={{
          width: "248px",
          height: "40px",
          top: "490px",
          left: "1024px",
          borderRadius: "6px",
          border: "1px",
          position: "absolute",
          color: "#0D6EFD",
        }}
      >
        Sellers Profile
      </Button>
    </>
  );
}

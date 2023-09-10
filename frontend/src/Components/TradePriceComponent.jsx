import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
export default function TradePriceComponent({ trade }) {
  console.log(trade);
  return (
    <>
      <Container
        style={{
          width: "70px",
          height: "42px",
          top: "16px",
          left: "16px",
          position: "relative",
          border: "3px solid yellow",
          //   margin: "0px",
          marginLeft: "0px",
          marginRignt: "8px",

          //   display: "flex",
          //   flexDirection: "column",
        }}
      >
        {" "}
        <Card.Text
          style={{
            width: "70px",
            height: "16px",
            top: "16px",
            left: "0px",
            position: "relative",
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
              color: "#606060",
            }}
          >
            {trade.text}
          </Typography>
        </Card.Text>
      </Container>

      <Card.Text
        style={{
          width: "64px",
          height: "22px",
          top: "20px",
          left: "-45px",
          position: "relative",
        }}
      >
        <Typography
          style={{
            //styleName: Title-h5;
            fontFamily: "Inter",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "22px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#FA3434",
          }}
        >
          {trade.price}
        </Typography>
      </Card.Text>

      {/* <hr
        style={{
          width: "44.00000000000004px",
          top: "369px",
          left: "679px",
          border: "1px  #BDC1C8",
          angle: "-90 deg",
          position: "absolute",
        }}
      /> */}
    </>
  );
}

import { Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import { Form } from "react-bootstrap";

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
        border: "1px solid purple",
      }}
    >
      <Card
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "6px",
          border: "1px solid green",
        }}
      >
        <Card.Img
          style={{
            width: "70px",
            height: "70px",
            top: "5px",
            left: "5px",
            padding:
              "4.97777795791626px 8.711114883422852px 5.288888454437256px 8.711111068725586px",
            position: "absolute",
            border: "1px solid green",
          }}
        />
      </Card>
      <Card.Text
        style={{
          width: "462px",
          height: "22px",
          left: "90px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text-title;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0px",
            textAlign: "left",
          }}
        >
          T-shirts with multiple colors, for men and lady
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "429px",
          height: "48px",
          top: "28px",
          left: "90px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
          }}
        >
          Size: medium, Color: blue, Material: Plastic Seller: Artel Market
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "54px",
          height: "22px",
          top: "6px",
          left: "786px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text-title;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "22px",
            letterSpacing: "0px",
            textAlign: "right",
          }}
        >
          $78.99
        </Typography>
      </Card.Text>
      <Form.Select
        style={{
          width: "123px",
          height: "40px",
          top: "40px",
          left: "717px",
          position: "absolute",
        }}
      ></Form.Select>
    </Card>
  );
}

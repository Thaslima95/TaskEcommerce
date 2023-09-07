import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
export default function CartPage() {
  return (
    <Container
      style={{
        width: "1440px",
        height: "1807px",

        border: "1px solid blue",
      }}
    >
      <Container
        style={{ width: "1440px", height: "86px", border: "1px solid red" }}
      ></Container>
      <Card.Title
        style={{
          width: "127px",
          height: "32px",
          top: "113px",
          left: "130px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H3;
            fontFamily: "Inter",
            fontSize: "24px",
            fontWeight: "600",
            lineHeight: "32px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
          }}
        >
          My cart (3)
        </Typography>
      </Card.Title>
      <Container
        style={{
          width: "880px",
          height: "552px",
          top: "168px",
          left: "130px",
          borderRadius: "6px",
          border: "1px solid red",
          position: "absolute",
        }}
      ></Container>
      <Container
        style={{
          width: "280px",
          height: "110px",
          top: "168px",
          left: "1030px",
          position: "absolute",
        }}
      ></Container>
      <Card.Text
        style={{
          width: "122px",
          height: "19px",
          top: "188px",
          left: "1046px",
          position: "absolute",
          border: "1px solid black",
        }}
      >
        <Typography
          style={{
            //styleName: Text-base;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
          }}
        >
          Have a coupon?
        </Typography>
      </Card.Text>
      <Container
        style={{
          width: "247px",
          height: "40px",
          top: "216px",
          left: "1047px",
          border: "1px solid red",
          position: "absolute",
        }}
      ></Container>
      <Form.Control
        style={{
          width: "164px",
          height: "40px",
          top: "216px",
          left: "1047px",
          position: "absolute",
        }}
      ></Form.Control>
      <Button
        Size="normal"
        Group="right"
        Content="btn-text"
        Color="light"
        style={{
          width: "85px",
          height: "40px",
          top: "216px",
          left: "1209px",
          position: "absolute",
        }}
      >
        Apply
      </Button>
      <Container
        style={{
          width: "280px",
          height: "302px",
          top: "290px",
          left: "1030px",
          borderRadius: "8px",
          position: "absolute",
        }}
      ></Container>
      <Card.Text
        style={{
          width: "66px",
          height: "24px",
          top: "368px",
          left: "1228px",
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
            textAlign: "right",
          }}
        >
          + $14.00
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "31px",
          height: "24px",
          top: "368px",
          left: "1050px",
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
          Tax:
        </Typography>
      </Card.Text>
      <Card
        style={{
          width: "244px",
          height: "24px",
          top: "339px",
          left: "1050px",
          position: "absolute",
        }}
      ></Card>
      <Card.Text
        style={{
          width: "70px",
          height: "24px",
          top: "339px",
          left: "1050px",
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
          Discount:
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "65px",
          height: "24px",
          top: "339px",
          left: "1229px",
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
            textAlign: "right",
            position: "absolute",
          }}
        >
          - $60.00
        </Typography>
      </Card.Text>
      <Card
        style={{
          width: "244px",
          height: "24px",
          top: "310px",
          left: "1050px",
          position: "absolute",
        }}
      ></Card>
      <Card.Text
        style={{
          width: "67px",
          height: "24px",
          top: "310px",
          left: "1050px",
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
            position: "absolute",
          }}
        >
          Subtotal:
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "70px",
          height: "24px",
          top: "310px",
          left: "1224px",
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
            textAlign: "right",
          }}
        >
          $1403.97
        </Typography>
      </Card.Text>
      <Card
        style={{
          width: "244px",
          height: "28px",
          top: "427px",
          left: "1050px",
          position: "absolute",
        }}
      ></Card>
      <Card.Text
        style={{
          width: "44px",
          height: "19px",
          top: "433px",
          left: "1050px",
          position: "absolute",
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
            color: "#1C1C1C",
          }}
        >
          Total:
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "87px",
          height: "28px",
          top: "427px",
          left: "1207px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H4;
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "right",
          }}
        >
          $1357.97
        </Typography>
      </Card.Text>
      <Button
        Size="large"
        Content="btn-text"
        Color="primary"
        style={{
          width: "248px",
          background: " #00B517",
          height: "54px",
          top: "477px",
          left: "1046px",
          padding: "0px 20px 0px 20px",
          borderRadius: "8px",
          gap: "10px",
          position: "absolute",
        }}
      >
        Checkout
      </Button>
      <Container
        style={{
          width: "840px",
          height: "136px",
          top: "503px",
          left: "150px",
          border: "0px 0px 1px 0px",
          position: "absolute",
        }}
      ></Container>
    </Container>
  );
}

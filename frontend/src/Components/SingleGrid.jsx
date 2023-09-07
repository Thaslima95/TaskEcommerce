import { Rating, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

export default function SingleGrid() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [value, setValue] = React.useState(2);
  const labels: { [index: string]: string } = {
    0.5: "1",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "7.5",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  return (
    <Card
      style={{
        width: "295px",
        height: "405px",
        top: "340px",
        left: "384px",
        position: "absolute",
        border: "2px solid red",
      }}
    >
      <Card
        style={{
          width: "230px",
          height: "230px",
          top: "15px",
          left: "33px",
          padding:
            "13.288888931274414px 13.288894653320312px 14.311117172241211px 14.311111450195312px",
          position: "absolute",
          border: "1px solid blue",
        }}
      >
        <Card.Img
          style={{
            width: "202.39999389648438px",
            height: "202.39999389648438px",
            top: "13.2889404296875px",
            left: "14.31103515625px",
            position: "relative",
          }}
        />
      </Card>
      <Card
        style={{
          width: "140px",
          height: "23px",
          top: "278px",
          left: "20px",
          position: "relative",
        }}
      >
        <Card.Text
          style={{
            width: "63px",
            height: "22px",
            top: "278px",
            left: "20px",
            // position: "absolute",
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
            }}
          >
            $99.50
          </Typography>
        </Card.Text>
        <Card.Text
          style={{ width: "69px", height: "19px", top: "282px", left: "91px" }}
        >
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
            }}
          >
            $1128.00
          </Typography>
        </Card.Text>
      </Card>
      <Card
        style={{
          width: "108px",
          height: "19px",
          top: "310px",
          left: "20px",
          pposition: "relative",
          border: "1px solid red",
        }}
      >
        <Rating
          style={{
            width: "80px",
            height: "15px",
            // top: "311px",
            // left: "20px",
            // position:"absolute"
          }}
        ></Rating>
        <Card.Text
          style={{
            width: "22px",
            height: "19px",
            // top: "310px",
            // left: "106px",
            // position:"absolute"
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
              color: " #FF9017",
            }}
          >
            7.5
          </Typography>
        </Card.Text>
      </Card>
      <Card.Text
        style={{
          width: "215px",
          height: "48px",
          top: "339px",
          left: "20px",
          position: "absolute",
          border: "1px solid green",
        }}
      >
        <Typography
          style={{
            //styleName: Text-info;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
          }}
        >
          GoPro HERO6 4K Action Camera - Black
        </Typography>
      </Card.Text>
      <Card
        style={{
          width: "40px",
          height: "40px",
          top: "280px",
          left: "235px",
          padding: "8px",
          borderRadius: "6px",
          border: "1px",
          position: "relative",
        }}
      >
        <Checkbox
          style={{
            // width: "10px",
            // height: "10px",

            width: "24px",
            height: "24px",
            top: "8px",
            left: "8px",
            padding: "2.8249998092651367px 2px 2.8249998092651367px 2px",
            position: "relative",
          }}
          // className="float-right"
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />{" "}
      </Card>
    </Card>
  );
}

import React from "react";
import { Box } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import first from "../1.jpg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Card from "react-bootstrap/Card";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function PreviewContainer({ category }) {
  const { title, price, description, image, id } = category;
  function getLabelText(value: number) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [value, setValue] = React.useState(2);

  const [hover, setHover] = React.useState(-1);
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

  return (
    <>
      <Card
        style={{
          width: "920px",
          height: "230px",
          // top: "289px
          // left: 390px
          // border: "1px solid green",
          border: "none",
        }}
      >
        {/* <Checkbox
            style={{
              // width: "10px",
              // height: "10px",
              top: "7px",
              position: "relative",
              left: "430px",
            }}
            // className="float-right"
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
          /> */}
        <Card
          style={{
            width: "210px",
            height: "210px",
            // border: "1px solid blue",
            top: "9px",
            left: "7px",
            border: "none",
            position: "relative",
            padding:
              "12.133333206176758px 12.133330345153809px 13.06666374206543px 13.066666603088379px",
          }}
        >
          <Card.Img
            style={{
              width: "184.8000030517578px",
              height: "184.8000030517578px",
              top: "12.13330078125px",
              left: "13.066650390625px",
              position: "relative",
            }}
            src={category.image}
          />
        </Card>
        <Card.Title
          style={{
            width: "395px",
            height: "22px",
            top: "23px",
            left: "229px",
            position: "absolute",
            border: "none",
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
            {category.title}
          </Typography>
        </Card.Title>
        <Card.Title
          style={{
            width: "162px",
            height: "28px",
            top: "61px",
            left: "229px",
            position: "absolute",
            // border: "1px solid red",
            display: "flex",
            border: "none",
          }}
        >
          <Card.Title
            style={{
              width: "83px",
              height: "28px",
              // top: "61px",
              // left: "229px",
              // position: "relative",
              border: "none",
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
                textAlign: "left",
              }}
            >
              ${category.price}
            </Typography>
          </Card.Title>
          <Card.Title
            style={{
              width: "72px",
              height: "19px",
              // top: "66px",
              // left: "319px",
              // position: "absolute",
              border: "none",
            }}
          >
            <Typography
              style={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              $1128.00
            </Typography>
          </Card.Title>
        </Card.Title>
        <Card
          style={{
            width: "344px",
            height: "19px",
            top: "93px",
            left: "229px",
            position: "absolute",
            // border: "1px solid blue",
            // display: "flex",
            border: "none",
          }}
        >
          {" "}
          <Rating
            style={{
              width: "80px",
              height: "15px",
              // top: "94px",
              // left: "229px",
            }}
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="small" />}
          />
          <Typography
            style={{
              width: "22px",
              height: "19px",
              // top: "93px",
              // left: "315px",
              // position: "absolute",
              //styleName: Text-base;
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
              color: "#FF9017",
            }}
          >
            7.5
          </Typography>
          <Typography
            style={{
              width: "104px",
              height: "19px",
              // top: "93px",
              // left: "469px",
              //styleName: Text-base;
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
              color: " #00B517",
            }}
          >
            Free Shipping
          </Typography>
        </Card>
        <Card
          style={{
            width: "607px",
            height: "75px",
            top: "124px",
            left: "229px",
            position: "absolute",
            // border: "1px solid red",
            border: "none",
          }}
        >
          <Card.Text
            style={{
              width: "607px",
              height: "48px",
              // top: "124px",
              // left: "229px",
              // position: "absolute",
              // border: "1px solid green",
              border: "none",
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </Typography>
          </Card.Text>
          <Card.Text
            style={{
              width: "94px",
              height: "19px",
              // top: "180px",
              // left: "229px"
              border: "none",
            }}
          >
            <Link to={`/single/${id}`}>
              <Typography
                style={{
                  //styleName: text-btn/btn-normal;
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "19px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: " #0D6EFD",
                }}
              >
                View details
              </Typography>
            </Link>
          </Card.Text>
        </Card>
      </Card>
    </>
  );
}

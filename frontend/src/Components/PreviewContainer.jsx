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
    <Row>
      <Box className="col-xl-3 col-md-8">
        <a href="#">
          <Card.Img
            style={{
              width: "220px",
              height: "180px",
              paddingLeft: "10px",
            }}
            variant="top"
            src={image}
          />
        </a>
      </Box>
      <Box
        style={{ marginLeft: "0", paddingLeft: "0" }}
        className="col-xl-9 col-md-8"
      >
        <Checkbox
          className="float-right"
          {...label}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
        <Card style={{ border: "none" }}>
          <Card.Body className="text-left">
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              ${price}
              <span className="px-2">
                <strike>${Number(price) + 467}</strike>
              </span>
            </Card.Subtitle>

            <Card.Text>
              <Box
                sx={{
                  width: 300,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
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
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>
                    {labels[hover !== -1 ? hover : value]}
                  </Box>
                )}
                <Box sx={{ ml: 2 }}>Free Shipping</Box>
              </Box>
            </Card.Text>
            <Card.Text>{`${
              description && description.substring(0, 80)
            }...`}</Card.Text>
            <Card.Link href="#" style={{ color: "blue" }}>
              <Link to={`/single/${id}`}>View Details</Link>
            </Card.Link>
          </Card.Body>
        </Card>
      </Box>
    </Row>
  );
}

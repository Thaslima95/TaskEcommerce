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
import { Container } from "react-bootstrap";

export default function GridContainer() {
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
    <Container></Container>
    // <Row>
    //   {Array.from(Array(9)).map((_, index) => (
    //     <Col style={{ border: "2px solid purple", height: "400px" }} xl={4}>
    //       <a href="#">
    //         <img className="img-height" src={first} alt="" />
    //       </a>

    //       <Checkbox
    //         className="float-right"
    //         {...label}
    //         icon={<FavoriteBorder />}
    //         checkedIcon={<Favorite />}
    //       />
    //       <Card style={{ border: "none" }}>
    //         <Card.Body className="text-left">
    //           <Card.Subtitle className="mb-2 text-muted">
    //             $57887.0
    //             <span>
    //               <strike>$76564</strike>
    //             </span>
    //           </Card.Subtitle>

    //           <Card.Text>
    //             <Box
    //               sx={{
    //                 width: 300,
    //                 display: "flex",
    //                 alignItems: "center",
    //               }}
    //             >
    //               <Rating
    //                 name="hover-feedback"
    //                 value={value}
    //                 precision={0.5}
    //                 getLabelText={getLabelText}
    //                 onChange={(event, newValue) => {
    //                   setValue(newValue);
    //                 }}
    //                 onChangeActive={(event, newHover) => {
    //                   setHover(newHover);
    //                 }}
    //                 emptyIcon={
    //                   <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
    //                 }
    //               />
    //               {value !== null && (
    //                 <Box sx={{ ml: 2 }}>
    //                   {labels[hover !== -1 ? hover : value]}
    //                 </Box>
    //               )}
    //             </Box>
    //           </Card.Text>
    //           <Card.Title>Card Title</Card.Title>

    //           <Card.Link href="#" style={{ color: "blue" }}>
    //             View Details
    //           </Card.Link>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //   ))}
    // </Row>
  );
}

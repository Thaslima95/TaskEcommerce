import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function BestTabComponent() {
  const categoryname = useParams().category;
  console.log(categoryname);
  const [categories, setCategories] = useState([]);
  const [display, setDisplay] = useState("hidden");
  const [checked, setChecked] = useState(true);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [categories]);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <>
      <Container
        style={{
          border: "1px solid Black",
          width: "920px",
          height: "62px",
          top: "207px",
          left: "390px",
          borderRadius: "6px",
          border: "1px",
          position: "absolute",
        }}
      ></Container>
      <FormGroup
        style={{
          width: "144px",
          height: "36px",
          top: "221px",
          left: "897px",
          padding: "6px 16px 6px 0px",
          position: "absolute",
        }}
      >
        <FormControlLabel
          style={{
            width: "34px",
            height: "24px",
            padding: "2px 13px 2px 1px",
          }}
          control={<Checkbox />}
        />
        <Card.Text style={{ width: "94px", height: "19px" }}>
          <Typography
            style={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "19px",
              letterSpacing: "0px",
              textAlign: "left",
              color: "#1C1C1C",
            }}
          >
            Verified only
          </Typography>
        </Card.Text>
      </FormGroup>
      <Container
        style={{
          width: "172px",
          height: "40px",
          top: "218px",
          left: "1042px",
          position: "absolute",
        }}
      >
        <Form.Select>
          <option>Featured</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Container>
      <Card.Text
        style={{
          width: "251px",
          height: "19px",
          top: "229px",
          left: "409px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H6;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",

            //styleName: Text-base;
          }}
        >
          {categories.length} items in
          <strong>{categoryname}</strong>
        </Typography>
      </Card.Text>
      <ButtonGroup
        style={{
          width: "76px",
          height: "40px",
          top: "218px",
          left: "1224px",
          position: "absolute",
        }}
        aria-label="Basic example"
      >
        <TableRowsIcon />
        <GridViewIcon />
      </ButtonGroup>
    </>
  );
}

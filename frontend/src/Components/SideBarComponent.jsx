import React from "react";

import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import { FormControl } from "@mui/material";
import Slider from "@mui/material/Slider";
import PreviewContainer from "./PreviewContainer";
import { Row } from "react-bootstrap";
import BestTabComponent from "./BestTabComponent";
import BestTabComponent2 from "./BestTabComponent2";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbComponent from "./BreadCrumbComponent";

function valuetext(value) {
  return `$${value}`;
}

export default function SideBarComponent() {
  const val = useParams().category;
  console.log(val);
  const [value, setValue] = useState([2000, 3200]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${val}`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [val]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [display, setDisplay] = useState("hidden");
  const [brands, setBrands] = useState("none");
  const [brandnames, setBrandnames] = useState([]);
  const [feature, setFeature] = useState("none");
  const [featuretype, setFeatureType] = useState([]);
  console.log(brandnames);
  const handleBrandChange = (event) => {
    const index = brandnames.indexOf(event.target.value);
    if (index === -1) {
      setBrandnames([...brandnames, event.target.value]);
    } else {
      setBrandnames(brandnames.filter((b) => b !== event.target.value));
    }
  };
  const handleFeatureChange = (event) => {
    const index = featuretype.indexOf(event.target.value);
    if (index === -1) {
      setFeatureType([...featuretype, event.target.value]);
    } else {
      setFeatureType(featuretype.filter((b) => b !== event.target.value));
    }
  };
  return (
    <Container
      style={{
        width: "240px",
        height: "1448px",
        top: "208px",
        left: "132px",
        borderRadius: "6px",
        border: "1px solid red",
      }}
    >
      <Col
        style={{
          width: "230px",
          height: "48px",
          top: "208px",
          left: "132px",
          padding: "12px 0px 12px 0px",
          border: "1px 0px 0px 0px",
        }}
      >
        <b>Other category</b>
        <ArrowDropDown
          size="20"
          onClick={() => (display ? setDisplay("") : setDisplay("hidden"))}
        />
      </Col>
    </Container>
  );
}

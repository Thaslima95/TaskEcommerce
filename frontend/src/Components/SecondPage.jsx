import React from "react";
import { Container, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import Slider from "@mui/material/Slider";
import PreviewContainer from "./PreviewContainer";
import { Row } from "react-bootstrap";
import BestTabComponent from "./BestTabComponent";
import BestTabComponent2 from "./BestTabComponent2";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbComponent from "./BreadCrumbComponent";
import SideBarComponent from "./SideBarComponent";
import { Card } from "react-bootstrap";
import PaginationComponent from "./PaginationComponent";

import Vector from "../Vector.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import LayoutCollapse from "./LayoutCollapse";
import BrandComponent from "./BrandComponent";
import { Grid } from "@mui/material";
import NavTabComponent from "./NavTabComponent";
import Responsive from "./Responsive";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
function valuetext(value) {
  return `$${value}`;
}

export default function SecondPage({ valuescheck }) {
  const layout = [
    "Category",
    "Brands",
    "Features",
    "Price Range",
    "Condition",
    "Rating",
  ];
  const location = useLocation();
  const [searchparam] = useSearchParams();
  const val = useParams().category;
  console.log(val);
  let searchTerm = searchparam.get("search");
  console.log(searchparam.get("search"));
  const products = [];
  const [value, setValue] = useState([2000, 3200]);
  const [categories, setCategories] = useState([]);
  const [listcategory, setListCategory] = useState([]);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setListCategory(json));
  }, [listcategory]);
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
    <>
      <Grid
        xs
        md={10}
        container
        sx={{
          border: "2px solid green",
          top: "180px",
          position: "absolute",
          marginLeft: { md: "130px" },
        }}
      >
        <Grid item xs={12} md={12} sx={{ border: "2px solid red" }}>
          <BreadCrumbComponent />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ border: "2px solid red", display: "flex" }}
        >
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: { xs: "none", md: "block" },
              border: "3px solid green",
            }}
          >
            Left
          </Grid>
          <Grid item xs={12} md={9} sx={{ border: "3px solid red" }}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                border: "3px solid green",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <BestTabComponent />
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <Button variant="contained" {...bindTrigger(popupState)}>
                      Show More
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Profile</MenuItem>
                      <MenuItem onClick={popupState.close}>My account</MenuItem>
                      <MenuItem onClick={popupState.close}>Logout</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </Grid>
            <Grid item xs={12} md={8}>
              Item 1
            </Grid>
            <Grid item xs={12} md={8}>
              {searchTerm ? console.log(searchTerm) : ""}
              {searchTerm
                ? categories
                    .filter(({ title, category }) =>
                      title.toLowerCase().includes(searchTerm)
                    )
                    .filter(
                      ({ title }) =>
                        !searchTerm || title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return <PreviewContainer category={product} />;
                    })
                : categories
                    .filter(
                      ({ title }) =>
                        !searchTerm || title.toLowerCase().includes(searchTerm)
                    )
                    .map((product) => {
                      return <PreviewContainer category={product} />;
                    })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

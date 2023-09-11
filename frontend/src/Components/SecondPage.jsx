import React from "react";
import { Container, Col, Nav } from "react-bootstrap";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState, useEffect } from "react";

import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography } from "@mui/material";

import PreviewContainer from "./PreviewContainer";

import BestTabComponent from "./BestTabComponent";

import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbComponent from "./BreadCrumbComponent";

import PaginationComponent from "./PaginationComponent";

import Vector from "../Vector.png";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { List } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import NavTabComponent from "./NavTabComponent";
import Responsive from "./Responsive";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
function valuetext(value) {
  return `$${value}`;
}

export default function SecondPage() {
  const layout = [
    "Category",
    "Brands",
    "Features",
    "Price Range",
    "Condition",
    "Rating",
  ];

  const [checked, setChecked] = React.useState([]);

  const handleToggle = (price) => (e) => {
    e.preventDefault();
    console.log(price);
    const currentIndex = checked.indexOf(price);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(price);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
  const [brandhide, setBrandHide] = useState(false);
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

  return (
    <>
      <Grid
        xs
        md={10}
        container
        sx={{
          top: "180px",
          position: "absolute",
          marginLeft: { md: "130px" },
        }}
      >
        <Grid item xs={12} md={12} sx={{}}>
          <BreadCrumbComponent />
        </Grid>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Grid item>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  style={{
                    //styleName: Title-H6;
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "19px",
                    letterSpacing: "0px",
                    textAlign: "left",
                  }}
                >
                  Category
                </Typography>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    padding: "8.295000076293945px 6px 8.295000076293945px 6px",
                  }}
                  src={Vector}
                  onClick={() => setHide(!hide)}
                />
              </Box>
              <Box>
                <Nav
                  style={hide ? { display: "block" } : { display: "none" }}
                  activeKey={location.pathname}
                >
                  {listcategory.map((e) => {
                    return (
                      <Link to={`/category/${e}`}>
                        <Nav.Item
                          style={{
                            width: "240px",
                            height: "36px",

                            padding: "9px 11px 8px 0px",
                          }}
                        >
                          {e}
                        </Nav.Item>
                      </Link>
                    );
                  })}
                </Nav>
              </Box>
            </Grid>
            <Grid>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Price</Typography>
                <img
                  style={{
                    width: "24px",
                    height: "24px",
                    padding: "8.295000076293945px 6px 8.295000076293945px 6px",
                  }}
                  src={Vector}
                  onClick={() => setBrandHide(!brandhide)}
                />
              </Box>
              <Box>
                <List
                  style={brandhide ? { display: "block" } : { display: "none" }}
                >
                  {[109, 114, 64].map((price) => {
                    const labelId = `checkbox-list-label-${price}`;

                    return (
                      <ListItem key={price}>
                        <ListItemButton
                          role={undefined}
                          onClick={handleToggle(price)}
                          dense
                        >
                          <ListItemIcon>
                            <Checkbox
                              edge="start"
                              checked={checked.indexOf(price) !== -1}
                              tabIndex={-1}
                              disableRipple
                              inputProps={{ "aria-labelledby": labelId }}
                            />
                          </ListItemIcon>

                          <ListItemText id={labelId} primary={`${price}`} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9} sx={{}}>
            <Grid
              item
              xs={12}
              md={12}
              sx={{
                display: "flex",
                flexWrap: "wrap",

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
              {checked &&
                checked.map((e) => (
                  <h4>
                    {e} <button>remove</button>
                  </h4>
                ))}
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
              {checked.length != 0
                ? checked.map((e) =>
                    categories
                      .filter((p) => p.price == e)
                      .map((e) => {
                        return (
                          <>
                            <PreviewContainer category={e} />
                          </>
                        );
                      })
                  )
                : " "}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

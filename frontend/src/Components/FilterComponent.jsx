import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Responsive from "./Responsive";
import { useState, useEffect } from "react";
import SecondPage from "./SecondPage";

import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import BestTabComponent from "./BestTabComponent";
import BreadCrumbComponent from "./BreadCrumbComponent";

export default function FilterComponent() {
  const categoryname = useParams().category;
  const location = useLocation();
  console.log(location.state);
  // The default value of location.state is null if you don't pass any data.
  const filterval = useParams().value;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryname}`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <Grid
      xs
      md={10}
      container
      sx={{
        top: "180px",
        position: "absolute",
        marginLeft: "130px",
      }}
    >
      <Grid item xs={12} md={12} sx={{}}>
        <BreadCrumbComponent />
      </Grid>
      <Grid item xs={12} md={12} sx={{ display: "flex" }}>
        <Grid item xs={12} md={3} sx={{}}>
          Left
        </Grid>
        <Grid item xs={12} md={9} sx={{}}>
          <Grid
            item
            xs={12}
            md={11}
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

          <Grid xs={12} md={12} sx={{ display: "flex", flexWrap: "wrap" }}>
            {categories &&
              categories.map((e) => {
                return (
                  <Grid
                    item
                    md={4}
                    spacing={1}
                    sx={
                      {
                        // border: "1px solid blue",
                      }
                    }
                  >
                    <Responsive products={e} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

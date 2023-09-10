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
    <Box sx={{ flexGrow: 1 }}>
      <BestTabComponent />
      <Grid container sx={{ top: "300px", position: "absolute" }} spacing={2}>
        <Grid item xs={3} sx={{ border: "1px solid green" }}>
          {/* <SecondPage valescheck={location.state} /> */}
        </Grid>
        <Grid
          xs={8}
          sx={{ border: "1px solid green" }}
          columns={{ sm: 8, md: 3, xs: 3 }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 1, lg: 1 }}
            columns={{ sm: 10, md: 10, xs: 4 }}
          >
            {categories &&
              categories.map((e) => {
                return (
                  <Grid
                    item
                    md={3}
                    spacing={2}
                    sx={{
                      // border: "1px solid blue",
                      paddingRight: 5,
                      marginLeft: 3,
                    }}
                  >
                    <Responsive products={e} />
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

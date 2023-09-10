import * as React from "react";

import Box from "@mui/material/Box/Box";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Responsive from "./Responsive";

export default function GridContainer() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, []);
  return (
    <>
      {" "}
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        <Grid
          container
          columns={{ xs: 3, md: 3 }}
          sx={{ border: "1px solid red" }}
        >
          {" "}
          hello
        </Grid>
        <Grid
          container
          spacing={{ xs: 6, md: 1 }}
          columns={{ xs: 6, sm: 8, md: 8 }}
        >
          {categories.map((e, index) => (
            <Grid item xs={2} sm={2} md={3} lg={2} key={index}>
              <Responsive />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

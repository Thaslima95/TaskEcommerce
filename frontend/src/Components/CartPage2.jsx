import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card } from "react-bootstrap";
import { Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import CartPag3 from "./CartPag3";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import SaveForLaterComponent from "./SaveForLaterComponent";

export default function CartPage2() {
  const [cart, setCart] = useState([]);
  const [localcart, setlocalcart] = useState([]);
  useEffect(() => {
    const datas = localStorage.getItem("itemcart") || [];
    setlocalcart(JSON.parse(datas));
  }, []);
  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((json) => setCart(json));
  }, []);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          sx={{ top: "200px", position: "absolute" }}
          spacing={{ xs: 2, md: 1, lg: 1 }}
          columns={{ sm: 6, md: 10, xs: 6 }}
        >
          <Grid
            container
            xs={9}
            spacing={{ xs: 1, md: 1, lg: 1 }}
            columns={{ sm: 8, md: 12, xs: 8 }}
            sx={{ marginLeft: "20px" }}
          >
            <Grid>
              <Box sx={{ marginLeft: "30px" }}>
                {" "}
                <Typography>My Cart({`${localcart.length}`})</Typography>
              </Box>
            </Grid>
            {/* <SecondPage valescheck={location.state} /> */}
            <Grid item xs={12} md={12} sx={{ marginLeft: "50px" }}>
              {localcart.map((e) => (
                <CartPag3 cart={e} />
              ))}
              <Grid sx={{ display: "flex" }}>
                <Grid xs item>
                  <Button variant="contained">Back to Shop</Button>
                </Grid>
                <Grid xs item sx={{ display: "flex", alignItems: "flex-end" }}>
                  Remove All
                </Grid>
              </Grid>
              <Grid sx={{ display: "flex" }}>
                <Grid xs item>
                  Item 1
                </Grid>
                <Grid xs item>
                  Item 2
                </Grid>
                <Grid xs item>
                  Item 2
                </Grid>
              </Grid>
              <Grid
                container
                direction="column"
                sx={{
                  //   top: "1000px",
                  //   position: "absolute",
                  marginTop: "50px",
                }}
              >
                <Grid>Save for Later</Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {localcart.map((e) => {
                    return <SaveForLaterComponent cart={e} />;
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={6}
            md={2}
            sx={{}}
            //   columns={{ sm: 3, md: 3, xs: 3 }}
          >
            <Grid sx={{ display: "flex" }}>
              <Grid item xs sx={{ height: "230px" }}>
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  size="small"
                />
                <Typography sx={{ top: "90px", position: "relative" }}>
                  SubTotal:
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  Discout:
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  Tax:
                </Typography>
              </Grid>
              <Grid item xs sx={{ height: "230px" }}>
                <Button>Apply</Button>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  $4535
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  $4643
                </Typography>
                <Typography sx={{ top: "90px", position: "relative" }}>
                  $53
                </Typography>
              </Grid>
            </Grid>
            <Grid xs>
              <Button
                variant="contained"
                color="success"
                sx={{ width: "100%", marginTop: "20px" }}
              >
                Check Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/* <Grid
          xs
          sx={{ top: "650px", position: "absolute", border: "2px solid red" }}
        >
          Hello
        </Grid> */}
      </Box>
    </>
  );
}

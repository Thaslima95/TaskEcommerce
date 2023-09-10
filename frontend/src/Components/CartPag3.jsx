import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function CartPag3({ cart }) {
  const handleCart = () => {};
  console.log(cart);
  return (
    <Paper
      sx={{
        p: 2,
        // margin: "auto",
        Width: 900,
        minWidth: 200,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={cart.image} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {cart.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Full resolution 1920x1080 • JPEG
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                sx={{ cursor: "pointer" }}
                variant="body2"
                onClick={() => handleCart(cart.id)}
              >
                Remove
              </Typography>
              <Typography sx={{ cursor: "pointer" }} variant="body2">
                Save for later
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "flex-end",
            }}
          >
            <Typography variant="subtitle1" component="div">
              {cart.price}
            </Typography>
            <Typography>quantity</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

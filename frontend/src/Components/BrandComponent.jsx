import { Typography } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Vector from "../Vector.png";
import FormGroupCheckbox from "./FormGroupCheckbox";
import { useState } from "react";
import MUICheckbox from "./MUICheckbox.jsx";
import { List } from "@mui/material";

export default function BrandComponent() {
  const [hide, setHide] = useState(false);
  return (
    <>
      {/* <Container
        style={{
          width: "230px",
          height: "264px",
          top: "456px",
          left: "132px",
          border: "1px",
          position: "absolute",
          //   border: "3px solid black",
        }}
      ></Container>
      <Container
        style={{
          width: "230px",
          height: "48px",
          top: "456px",
          left: "132px",
          padding: "12px 0px 12px 0px",
          border: "1px 0px 0px 0px",
          position: "absolute",
        }}
      >
        <Card.Text
          style={{
            width: "55px",
            height: "19px",
            top: "14px",
            position: "absolute",
          }}
        >
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
            Brands
          </Typography>
        </Card.Text>
        <Card.Img
          style={{
            width: "24px",
            height: "24px",
            top: "12px",
            left: "206px",
            padding: "8.295000076293945px 6px 8.295000076293945px 6px",
            position: "absolute",
          }}
          src={Vector}
          onClick={() => setHide(!hide)}
        />
      </Container>
      <Container
        style={{
          width: "229px",
          height: "216px",
          top: "504px",
          left: "133px",
          position: "absolute",
        }}
      ></Container>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {hide &&
          [109, 114, 64].map((e) => {
            // return <FormGroupCheckbox name={e} />;
            return (
              <>
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
              </>
            );
          })}
      </List>
    </> */}
    </>
  );
}
import React from "react";
import { Grid } from "@mui/material";
import EcommLogo from "../EcommLogo.svg";
import { Box } from "@mui/material";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { User } from "@styled-icons/remix-fill/User";
import { Message } from "@styled-icons/boxicons-regular/Message";
import Typography from "@mui/material/Typography";
import { HeartFill } from "styled-icons/bootstrap";
import { CartFill } from "styled-icons/bootstrap";
import Drawer from "@mui/material/Drawer";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TableRows from "@mui/icons-material/TableRows";

type Anchor = "left";

export default function HeaderComponent2() {
  const [categories, setCategories] = useState([]);
  const [specificCategories, setSpecificCategories] = useState([]);
  const [, setSearchparam] = useSearchParams();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [categories]);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Grid container xs md={12} sx={{ margin: "auto" }}>
        {" "}
        <Grid
          md={10}
          sx={{
            marginLeft: "40px",
            display: "flex",
          }}
        >
          <Grid item xs md={3} sx={{}}>
            <Box>
              <a href="#">
                <img
                  style={{
                    width: "150px",
                    height: "46px",
                    paddingLeft: "10px",
                  }}
                  variant="top"
                  src={EcommLogo}
                />
              </a>
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <TableRows
                      onClick={toggleDrawer(anchor, true)}
                      sx={{ display: { md: "none", xs: "block" } }}
                    >
                      {anchor}
                    </TableRows>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </React.Fragment>
                ))}
              </div>
            </Box>
          </Grid>
          <Grid item xs md={7} sx={{ display: { md: "flex" } }}>
            <Grid item xs md={6}>
              {" "}
              <Form.Control
                size="md"
                type="search"
                placeholder="Large text"
                style={{
                  height: "40px",
                  borderLeft: "1px solid #0D6EFD",
                  borderTop: "1px solid #0D6EFD",
                  borderBottom: "1px solid #0D6EFD",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
                onChange={(e) => {
                  setSearchparam({ search: e.target.value.toLowerCase() });
                }}
              />
            </Grid>
            <Grid item xs md={3} sx={{ display: { xs: "none", md: "block" } }}>
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    background: "white",
                    color: "black",
                    width: "100%",
                    height: "40px",
                    borderLeft: "1px solid #0D6EFD",
                    borderTop: "1px solid #0D6EFD",
                    borderBottom: "1px solid #0D6EFD",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                >
                  All Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((c) => (
                    <Dropdown.Item as={Link} to={`/category/${c}`}>
                      {c}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Grid>
            <Grid item xs md={3} sx={{ display: { xs: "none", md: "block" } }}>
              {" "}
              <Button
                variant="primary"
                style={{
                  background: "#127FFF",
                  color: "White",
                  width: "100px",
                  height: "40px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item xs md={3} sx={{}}>
            <Box
              sx={{ display: "flex", justifyContent: "flex-end", gap: "30px" }}
            >
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <User
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  profile
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <Message
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Message
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <HeartFill
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Orders
                </Typography>
              </Box>
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <CartFill
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Cart
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        {/* <NavbarComponent /> */}
        <Outlet />
      </Grid>
    </>
  );
}

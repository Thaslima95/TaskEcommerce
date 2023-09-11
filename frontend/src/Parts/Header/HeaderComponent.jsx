import React, { useMemo } from "react";
import { Grid } from "@mui/material";
import EcommLogo from "../../Images/EcommLogo.svg";
import { Box } from "@mui/material";
import Dropdown from "react-bootstrap/Dropdown";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Form } from "react-bootstrap";
import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ApiCalls from "../../API/ApiCalls";
import "./Header.css";
import Profile from "../../Images/Profile.png";
import Message2 from "../../Images/Message2.png";
import Heart from "../../Images/Heart.png";
import Cart2 from "../../Images/Cart2.png";

type Anchor = "left";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [, setSearchparam] = useSearchParams();

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

  useMemo(() => {
    ApiCalls.getCategoris()
      .then((res) => setCategories(res))
      .catch((err) => console.log(err));
  }, []);

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
      <Grid container xs md={12} sx={{ margin: "auto", display: "block" }}>
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
                    width: "126px",
                    height: "44px",
                    marginLeft: "130px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  src={EcommLogo}
                />
              </a>
              <div>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    {/* <TableRows
                      onClick={toggleDrawer(anchor, true)}
                      sx={{ display: { md: "none", xs: "block" } }}
                    >
                      {anchor}
                    </TableRows> */}
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
            <Grid
              item
              xs
              md={6}
              sx={{
                border:
                  "1px solid linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
              }}
            >
              {" "}
              <Box>
                <Form.Control
                  size="md"
                  type="search"
                  placeholder="Search"
                  style={{
                    width: "421px",
                    height: "40px",
                    borderLeft: "1px solid #0D6EFD",
                    borderTop: "1px solid #0D6EFD",
                    borderBottom: "1px solid #0D6EFD",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "20px",
                    marginLeft: "20px",
                  }}
                  onChange={(e) => {
                    setSearchparam({ search: e.target.value.toLowerCase() });
                  }}
                />
              </Box>
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
                    width: "145px",
                    height: "40px",
                    borderLeft: "1px solid #0D6EFD",
                    borderTop: "1px solid #0D6EFD",
                    borderBottom: "1px solid #0D6EFD",
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    marginTop: "20px",
                  }}
                >
                  All Category
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
                  background:
                    "linear-gradient(180deg, #127FFF 0%, #0067FF 100%)",
                  color: "White",
                  width: "100px",
                  height: "40px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  marginLeft: "-28px",
                }}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <Grid item xs md={3} sx={{}}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "30px",
                marginTop: "25px",
                marginRight: "60px",
              }}
            >
              <Box
                style={{
                  color: "#8B96A5",
                  width: "27px",
                  height: "41px",
                  // border: "1px solid red",
                }}
              >
                <img
                  src={Profile}
                  alt=""
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                />

                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Profile
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
                <img
                  src={Message2}
                  style={{
                    color: "#8B96A5",
                    width: "20px",
                    height: "19px",
                  }}
                  alt=""
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
                <img
                  src={Heart}
                  style={{ color: "#8B96A5", width: "20px", height: "19px" }}
                  alt=""
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
                <img
                  src={Cart2}
                  style={{ width: "20px", height: "19px" }}
                  alt=""
                />
                <Typography style={{ fontSize: "12px" }} gutterBottom>
                  Cart
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid sx={{ border: "1px solid red" }}>hello</Grid>
        <Outlet />
      </Grid>
    </>
  );
}

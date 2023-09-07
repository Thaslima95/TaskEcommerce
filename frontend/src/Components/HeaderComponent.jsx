import React from "react";
import EcommLogo from "../EcommLogo.svg";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { BorderLeft } from "@mui/icons-material";
import { Box } from "@mui/material";
import { User } from "@styled-icons/remix-fill/User";
import { Message } from "@styled-icons/boxicons-regular/Message";
import { HeartFill } from "styled-icons/bootstrap";
import { CartFill } from "styled-icons/bootstrap";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

import { Profile } from "styled-icons/remix-line";
import NavbarComponent from "./NavbarComponent";
export default function HeaderComponent() {
  const [categories, setCategories] = useState([]);
  const [specificCategories, setSpecificCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [categories]);
  return (
    <>
      <Container>
        <Row>
          <Col xl={2} md={4} sm={6}>
            <a href="">
              <img src={EcommLogo} alt="" />
            </a>
          </Col>
          <Col
            style={{ display: "flex" }}
            xl={6}
            md={8}
            sm={4}
            className="px-0"
          >
            <Col xl={6}>
              <Form.Control
                size="md"
                type="text"
                placeholder="Large text"
                style={{
                  position: "relative",
                  height: "40px",
                  borderLeft: "1px solid #0D6EFD",
                  borderTop: "1px solid #0D6EFD",
                  borderBottom: "1px solid #0D6EFD",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  top: "22px",
                }}
              />
            </Col>
            <Col xl={3}>
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    position: "absolute",
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
                    top: "22px",
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
            </Col>
            <Col xl={3}>
              <Button
                variant="primary"
                style={{
                  position: "absolute",
                  background: "#127FFF",
                  color: "White",
                  width: "100px",
                  height: "40px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px",
                  top: "22px",
                }}
              >
                Search
              </Button>
            </Col>
          </Col>
          <Col xl={4}>
            <Box className="px-5">
              <User
                style={{
                  position: "absolute",
                  color: "#8B96A5",
                  width: "20px",
                  height: "19px",
                  top: "25px",
                  left: "1088px",
                }}
              />
              <Message
                style={{
                  position: "absolute",
                  color: "#8B96A5",
                  width: "20px",
                  height: "19px",
                  top: "26px",
                  left: "1156px",
                }}
              />
              <HeartFill
                style={{
                  position: "absolute",
                  color: "#8B96A5",
                  width: "20px",
                  height: "19px",
                  top: "25px",
                  left: "1207px",
                }}
              />
              <CartFill
                style={{
                  position: "absolute",
                  color: "#8B96A5",
                  width: "20px",
                  height: "19px",
                  top: "25px",
                  left: "1276px",
                }}
              />
            </Box>
          </Col>
        </Row>
        <NavbarComponent />
      </Container>
      <Outlet />
    </>
  );
}

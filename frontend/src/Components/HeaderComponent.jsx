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
          <Col style={{ display: "flex" }} xl={6} md={8} sm={4}>
            <Col xl={6}>
              <Form.Control size="lg" type="text" placeholder="Large text" />
            </Col>
            <Col xl={3}>
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    background: "white",
                    color: "blue",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  All Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories.map((c) => (
                    <Dropdown.Item href="#/action-1">{c}</Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xl={3}>
              <Button
                variant="primary"
                style={{
                  width: "100%",
                  background: "blue",
                  color: "White",
                  borderTopLeftRadius: "0",
                }}
              >
                Search
              </Button>
            </Col>
          </Col>
          <Col xl={4}>
            <Box className="px-5">
              <User size="25" />
              <Message size="25" />
              <HeartFill size="25" />
              <CartFill size="25" />
            </Box>
          </Col>
        </Row>
        <NavbarComponent />
      </Container>
      <Outlet />
    </>
  );
}

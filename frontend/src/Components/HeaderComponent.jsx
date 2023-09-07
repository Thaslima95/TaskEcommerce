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
import Typography from "@mui/material/Typography";
import { HeartFill } from "styled-icons/bootstrap";
import { CartFill } from "styled-icons/bootstrap";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

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
      <Container
        style={{
          border: "1px solid red",
          width: "1440px",
          height: "86px",
          margin: "0px",
          padding: "0px",
        }}
      >
        <Row>
          <Col xl={2} md={4} sm={6}>
            <a href="#">
              <Card.Img
                style={{
                  width: "150px",
                  height: "46px",
                  paddingLeft: "10px",
                  position: "absolute",
                  top: "20px",
                  left: "130px",
                }}
                variant="top"
                src={EcommLogo}
              />
            </a>
          </Col>
          <Col
            style={{
              display: "flex",
              width: "665px",
              height: "40px",
              position: "absolute",
              left: "326px",
              top: "20px",
              // border: "1px solid red",
              margin: "0px",
              padding: "0px",
            }}
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
                  height: "40px",
                  borderLeft: "1px solid #0D6EFD",
                  borderTop: "1px solid #0D6EFD",
                  borderBottom: "1px solid #0D6EFD",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
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
            </Col>
            <Col xl={3}>
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
            </Col>
          </Col>
          <Col
            xl={2}
            style={{
              // border: "1px solid green",
              top: "25px",
              left: "1080px",
              position: "absolute",
              display: "flex",
            }}
          >
            <Col
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
            </Col>
            <Col
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
                profile
              </Typography>
            </Col>
            <Col
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
                profile
              </Typography>
            </Col>
            <Col
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
                profile
              </Typography>
            </Col>
          </Col>
        </Row>
        <NavbarComponent />
      </Container>
      <Outlet />
    </>
  );
}

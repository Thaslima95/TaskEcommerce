import React from "react";
import EcommLogo from "../EcommLogo.svg";
import { Container, Row, Col } from "react-bootstrap";
// import Facebook from "../icon-facebook.svg";
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { Pinterest } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import Store from "../Store.png";

export default function Footer2() {
  return (
    <Container style={{ border: "2px solid red" }}>
      <Row>
        <Col lg={{ span: 3 }} style={{ border: "2px solid black" }}>
          <Row className="px-4">
            <a href="">
              <img src={EcommLogo} alt="" />
            </a>
          </Row>
          <Row className="px-4">
            Hellohbhsfbjsnjsfjnbdfhebfnvbjekrbffsnfv fahbgrejgf
          </Row>
          <Instagram className="mx-2" />
          <Facebook className="mx-2" />
          <Pinterest className="mx-2" />
          <Twitter className="mx-2" />
        </Col>
        <Col
          lg={{ span: 8 }}
          style={{ border: "2px solid black", display: "flex" }}
        >
          <Col
            lg={{ span: 4 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </nav>
          </Col>
          <Col
            lg={{ span: 3 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </nav>
          </Col>
          <Col
            lg={{ span: 3 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </nav>
          </Col>
          <Col
            lg={{ span: 3 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>For Users</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>Find store</li>
                <li>Categories</li>
                <li>Blogs</li>
              </ul>
            </nav>
          </Col>
        </Col>
        <Col lg={{ span: 1 }} style={{ border: "2px solid black" }}>
          <b>Get App</b>
          <a href="">
            <img src={Store} alt="" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

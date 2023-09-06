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
        <Col
          lg={{ offset: 1.5, span: 3 }}
          style={{ border: "2px solid black" }}
        >
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
          lg={{ offset: 1.5, span: 7 }}
          style={{ border: "2px solid black", display: "flex" }}
        >
          <Col
            lg={{ offset: 1.5, span: 4 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </nav>
          </Col>
          <Col
            lg={{ offset: 1.5, span: 4 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </nav>
          </Col>
          <Col
            lg={{ offset: 1.5, span: 4 }}
            style={{ border: "2px solid black" }}
            className="text-center"
          >
            <b>About Us</b>
            <nav>
              <ul>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
                <li>About us</li>
              </ul>
            </nav>
          </Col>
        </Col>
        <Col
          lg={{ offset: 1.5, span: 2 }}
          style={{ border: "2px solid black" }}
        >
          <b>Get App</b>
          <a href="">
            <img src={Store} alt="" />
          </a>
        </Col>
      </Row>
    </Container>
  );
}

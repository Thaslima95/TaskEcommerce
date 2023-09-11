import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Dropdown from "react-bootstrap/Dropdown";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Typography } from "@mui/material";
export default function NavbarComponent() {
  return (
    <Container
      style={{
        width: "1440px",
        // border: "1px solid red",
        position: "relative",
        top: "86px",
        height: "56px",
        margin: "0px",
        padding: "0px",
      }}
    >
      <Row>
        <Col
          style={{
            // border: "1px solid black",
            width: "620px",
            height: "24px",
            top: "16px",
            position: "absolute",
            left: "130px",
          }}
        >
          {" "}
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">
                <TableRowsIcon
                  style={{
                    color: "#1C1C1C",
                    width: "18px",
                    height: "12px",
                    position: "absolute",
                    top: "6px",
                    left: "3px",
                  }}
                />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/home"
                style={{ color: "black", margin: "0px", padding: "0px" }}
              >
                <Col
                  style={{
                    // border: "1px solid red",
                    width: "92px",
                    height: "22px",
                    top: "17px",
                    left: "160px",
                    postion: "relative",
                  }}
                >
                  <Typography>All Category</Typography>
                </Col>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-1"
                style={{ color: "black", margin: "0px", padding: "0px" }}
              >
                <Col
                  style={{
                    // border: "1px solid red",
                    width: "77px",
                    height: "22px",
                    top: "17px",
                    left: "277px",
                    postion: "relative",
                  }}
                >
                  <Typography>Hot Offers</Typography>
                </Col>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                style={{ color: "black", margin: "0px", padding: "0px" }}
              >
                <Col
                  style={{
                    // border: "1px solid red",
                    width: "79px",
                    height: "22px",
                    top: "17px",
                    left: "382px",
                    postion: "relative",
                  }}
                >
                  <Typography>Gift Boxes</Typography>
                </Col>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                style={{ color: "black", margin: "0px", padding: "0px" }}
              >
                <Col
                  style={{
                    // border: "1px solid red",
                    width: "63px",
                    height: "22px",
                    top: "17px",
                    left: "489px",
                    postion: "relative",
                  }}
                >
                  <Typography>Projects</Typography>
                </Col>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="link-2"
                style={{ color: "black", margin: "0px", padding: "0px" }}
              >
                <Col
                  style={{
                    // border: "1px solid red",
                    width: "81px",
                    height: "22px",
                    top: "17px",
                    left: "580px",
                    postion: "relative",
                  }}
                >
                  <Typography>Menu Item</Typography>
                </Col>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Col
                style={{
                  // border: "1px solid red",
                  width: "61px",
                  height: "24px",
                  top: "16px",
                  left: "689px",
                  postion: "relative",
                }}
              >
                <Dropdown className="show dropdown">
                  <Dropdown.Toggle
                    variant="primary"
                    id="dropdown-basic"
                    className="btn btn-primary"
                    style={{
                      position: "absolute",
                      background: "white",
                      color: "black",
                      width: "61px",
                      height: "24px",
                      border: "none",
                      borderRadius: "0px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    Help
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>Hello</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Nav.Item>
          </Nav>
        </Col>
        <Col>
          <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item style={{ position: "absolute", left: "1041px" }}>
              <Dropdown className="show dropdown">
                <Dropdown.Toggle
                  variant="primary"
                  id="dropdown-basic"
                  className="btn btn-primary"
                  style={{
                    position: "absolute",
                    background: "white",
                    color: "black",
                    width: "124px",
                    height: "40px",
                    border: "none",
                    top: "-1px",
                  }}
                >
                  English, USD
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Hello</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item style={{ position: "absolute", left: "1180px" }}>
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
                    border: "none",
                    top: "-1px",
                  }}
                >
                  ShipTo
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>Hello</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

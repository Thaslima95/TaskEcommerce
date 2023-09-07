import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import TableRowsIcon from "@mui/icons-material/TableRows";
import Dropdown from "react-bootstrap/Dropdown";

import { Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
export default function NavbarComponent() {
  return (
    <Container
      style={{
        width: "1440px",
        border: "1px solid red",
        position: "relative",
        top: "86px",
      }}
    >
      <Row>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">
              <TableRowsIcon style={{ color: "black" }} />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/home" style={{ color: "black" }}>
              All Category
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1" style={{ color: "black" }}>
              Hot Offers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: "black" }}>
              Gift Boxes
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: "black" }}>
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2" style={{ color: "black" }}>
              Menu Item
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
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
                Help
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Hello</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Item>
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
                English,US
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
      </Row>
    </Container>
  );
}

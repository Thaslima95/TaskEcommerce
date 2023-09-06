import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import GridViewIcon from "@mui/icons-material/GridView";
import TableRowsIcon from "@mui/icons-material/TableRows";

export default function BestTabComponent() {
  const [display, setDisplay] = useState("hidden");
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Container>
      <Row>
        <Col style={{ border: "1px solid Black" }} lg={{ span: 6 }}>
          products in
        </Col>
        <Col
          style={{ border: "1px solid Black", display: "flex" }}
          lg={{ span: 4 }}
        >
          <Col lg={4}>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          </Col>
          <Col lg={8}>
            <div>
              <div
                style={{
                  width: "80%",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-between",
                }}
                className="mt-1"
              >
                <b>Other category</b>
                <ArrowDropDown
                  size="20"
                  onClick={() =>
                    display ? setDisplay("") : setDisplay("hidden")
                  }
                />
              </div>
              <div>
                <nav style={{}}>
                  <ul className={`text-left ${display}`}>
                    <li>
                      <a href="#">Computers </a>
                    </li>
                    <li>
                      <a href="#">Smart watches </a>
                    </li>
                    <li>
                      <a href="#">Mini Cameras </a>
                    </li>
                    <li>
                      <a href="#">Accessories </a>
                    </li>
                    <li>
                      <a href="#">Headphones </a>
                    </li>
                    <li>
                      <a href="#">Printers </a>
                    </li>
                    <li>
                      <a href="#">Multimedia </a>
                    </li>
                    <li>
                      <a href="#">Accessories </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </Col>
        </Col>
        <Col style={{ border: "1px solid Black" }} lg={{ span: 2 }}>
          <TableRowsIcon className="float-right" />
          <GridViewIcon className="float-right" />
        </Col>
      </Row>
    </Container>
  );
}

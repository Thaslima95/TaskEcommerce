import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BgImage from "../bg-warehouse.jpg";
import { Button, Form, Card } from "react-bootstrap";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Section5() {
  return (
    <Container
      className="mt-3"
      style={{
        backgroundImage: `url(${BgImage})`,
        height: "400px",
        backgroundSize: "cover",
      }}
    >
      <Row>
        <Col style={{ border: "5px solid red" }}>1 of 2</Col>
        <Col style={{ border: "5px solid green" }}>
          <Container fluid>
            <Row>
              <Col lg={{ offset: 2, span: 8 }}>
                <Card className="mt-3 p-2 ">
                  <Card.Title className="text-left">
                    Send Quotes to Suppliers
                  </Card.Title>
                  <Card.Body>
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Control placeholder="What item do you need?" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Type more Details"
                      />
                    </Form.Group>
                    <FormControl sx={{ minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Card.Body>
                  <Button>Send Inquiry</Button>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

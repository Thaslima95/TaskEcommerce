import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BestTabComponent2() {
  return (
    <Container>
      <Row style={{ border: "2px solid green" }} className="px-0">
        <Col
          style={{ border: "3px solid black", marginLeft: "0" }}
          lg={{ span: 6 }}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
          >
            <Button>Recommended</Button>
            <Button>Best Rated</Button>
            <Button>Latest</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
}

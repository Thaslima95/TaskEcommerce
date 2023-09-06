import React from "react";
import { Row } from "react-bootstrap";
import { Container, Col, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function RelatedProducts() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <Container>
      <Row>Recommended Items</Row>
      <Row>
        {console.log(products)}
        {products.map((e, index) => (
          <Col lg={2} md={5} sm={7}>
            {console.log(e.image)}
            <Card
              className="d-flex flex-col justify-content-between"
              style={{ border: "none" }}
            >
              <Card.Body className="">
                <Card.Img
                  style={{
                    width: "200px",
                    height: "200px",
                    paddingLeft: "10px",
                    border: "2px solid red",
                  }}
                  variant="top"
                  src={e.image}
                />
                <div className="d-flex flex-row justify-content-start">
                  <div className="mb-3 text-left">
                    <b>${e.price}</b>
                    <br />
                    {e.title.substring(0, 20)}
                    <br />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainImg from "../main-tech.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Section1() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [categories]);

  return (
    <Container>
      <Row>
        <Col lg={3}>
          <nav class="nav flex-column nav-pills mb-3 mb-lg-0">
            {categories.map((c) => (
              <a class="nav-link" aria-current="page" href="#">
                <Link to={`/category/${c}`}>
                  {c[0].toUpperCase() + c.slice(1)}
                </Link>
              </a>
            ))}
          </nav>
        </Col>
        <Col xs={6} md="auto">
          <img src={MainImg} alt="" />
        </Col>
        <Col>
          <div class="bg-primary-light p-3 rounded mb-3">
            <p class="d-flex mb-3 text-base">
              <img
                src="images/avatars/avatar.jpg"
                class="img-avatar me-2"
                width="44"
                height="44"
                alt=""
              />
              <span>
                Hi, user <br /> let's get stated
              </span>
            </p>
            <a href="#" class="btn btn-sm btn-primary w-100">
              Join now
            </a>
          </div>

          <div
            class=" text-white p-3 rounded mb-2"
            style={{ background: "#F38332" }}
          >
            Get US $10 off with a new supplier account
            <br />{" "}
            <a href="#" class="text-white mt-1 fw-bold d-inline-block">
              Get now
            </a>
          </div>
          <div
            class=" text-white p-3 rounded mb-2"
            style={{ background: "#55BDC3" }}
          >
            Send quotes with supplier preferences
            <br />{" "}
            <a href="#" class="text-white mt-1 fw-bold d-inline-block">
              Try now
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

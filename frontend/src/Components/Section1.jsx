import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainImg from "../main-tech.png";
export default function Section1() {
  return (
    <Container>
      <Row>
        <Col style={{ border: "2px solid red" }} xs={3}>
          <nav class="nav flex-column nav-pills mb-3 mb-lg-0">
            <a class="nav-link" aria-current="page" href="#">
              Electronics
            </a>
            <a class="nav-link" href="#">
              Clothes and wear
            </a>
            <a class="nav-link" href="#">
              Home interiors
            </a>
            <a class="nav-link" href="#">
              Computer and tech
            </a>
            <a class="nav-link" href="#">
              Tools, equipments
            </a>
            <a class="nav-link" href="#">
              Sports and outdoor
            </a>
            <a class="nav-link" href="#">
              Animal and pets
            </a>
            <a class="nav-link" href="#">
              Machinery tools
            </a>
            <a class="nav-link" href="#">
              Other products
            </a>
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

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Check } from "@mui/icons-material";
import { ShoppingBag } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Nav from "react-bootstrap/Nav";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavTabComponent from "./NavTabComponent";
import SingleProductSide from "./SingleProductSide";
import { useParams, useSearchParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";

export default function SingleProduct() {
  const [singleproduct, setSingleProduct] = useState([]);
  const images = [];
  const val = useParams().id;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${val}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [setSingleProduct]);
  const { image } = singleproduct;
  console.log(image);
  for (let i = 0; i < 5; i++) {
    images.push(image);
  }
  return (
    <>
      <Row style={{ display: "flex" }}>
        <Col style={{ border: "1px solid Red" }} lg={4}>
          {images && images.length ? (
            <Carousel showArrows={true} autoPlay infiniteLoop>
              {images &&
                images.map((i, idx) => {
                  return (
                    <div style={{ height: "300px", width: "300px" }}>
                      <img src={i} key={idx} />
                    </div>
                  );
                })}
            </Carousel>
          ) : (
            <Card cover={<img src="" className="mb-3 card-image" />}></Card>
          )}
        </Col>
        <Col style={{ border: "2px solid red" }} lg={5}>
          <article>
            <p className="mb-2 text-success">
              <Check />
              in Stock
            </p>
            <h4 className="mb-2"> {singleproduct && singleproduct.title} </h4>

            <div className="rating-wrap mb-3">
              <b className="label-rating text-warning">
                <Rating name="size-small" defaultValue="" size="small" />
              </b>

              <i className="dot"></i>
              <span className="label-rating text-muted"> 34 reviews</span>
              <i className="dot"></i>
              <span className="label-rating text-muted">
                <ShoppingBag />
              </span>
            </div>
            <Col lg={9} className="d-flex mb-3">
              <Col>
                <var className="text-danger h6">
                  ${singleproduct && singleproduct.price}
                </var>
                <br />
                <small>50-100 pcs</small>
              </Col>
              <Col>
                <var className="h6">
                  ${singleproduct && Number(singleproduct.price) - 10}
                </var>
                <br />
                <small>100-700 pcs</small>
              </Col>
              <Col>
                <var className="h6">
                  ${singleproduct && Number(singleproduct.price) - 25}
                </var>
                <br />
                <small>700+ pcs</small>
              </Col>
            </Col>
            <dl className="row">
              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Price:
              </dt>
              <dd className="col-xxl-9 col-lg-8">Negotiable</dd>

              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">Type:</dt>
              <dd className="col-xxl-9 col-lg-8">classiic style</dd>

              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Material:
              </dt>
              <dd className="col-xxl-9 col-lg-8">Plastic </dd>

              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Sizes:
              </dt>
              <dd className="col-xxl-9 col-lg-8">Small, Medium, Large</dd>
            </dl>
            <hr />
            <dl className="row">
              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Customization:
              </dt>
              <dd className="col-xxl-9 col-lg-8">
                Customized logo and design custom packages
              </dd>

              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Protection:
              </dt>
              <dd className="col-xxl-9 col-lg-8">Refund Policy </dd>

              <dt className="col-xxl-3 col-lg-4 fw-normal text-muted">
                Warranty:
              </dt>
              <dd className="col-xxl-9 col-lg-8">2 years full warranty </dd>
            </dl>
          </article>
        </Col>
        <Col lg={3}>
          <SingleProductSide />
        </Col>
      </Row>
      <Row>
        <Col lg={8}>
          <NavTabComponent description={singleproduct.description} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <RelatedProducts />
        </Col>
      </Row>
    </>
  );
}

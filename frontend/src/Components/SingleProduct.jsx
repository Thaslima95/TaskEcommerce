import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

import { ShoppingBag } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import Check from "../Images/Check.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import NavTabComponent from "./NavTabComponent";
import SingleProductSide from "./SingleProductSide";
import { useParams, useSearchParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts";
import { Typography } from "@mui/material";
import Bag from "../Images/Bag.png";
import TradePriceComponent from "./TradePriceComponent";
import TextDetailsComponent from "./TextDetailsComponent";
import SingleProductSideBar from "./SingleProductSideBar";

export default function SingleProduct() {
  const [singleproduct, setSingleProduct] = useState([]);
  const images = [];
  const val = useParams().id;
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${val}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  }, [singleproduct]);
  const { image } = singleproduct;
  console.log(image);
  for (let i = 0; i < 5; i++) {
    images.push(image);
  }
  return (
    <>
      <Container
        style={{
          width: "1180px",
          height: "580px",
          top: "206px",
          left: "130px",
          position: "absolute",
        }}
      >
        <Row style={{ display: "flex" }}>
          <Col lg={4}>
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

          <Col lg={3}></Col>
        </Row>
        <Row>
          <Col lg={8} style={{ top: "555px", position: "absolute" }}>
            <NavTabComponent description={singleproduct.description} />
          </Col>
        </Row>
        <Row>
          <Col lg={12} style={{ top: "806px", position: "absolute" }}>
            <RelatedProducts />
          </Col>
        </Row>
      </Container>
      {/* <SingleProductSide /> */}
      <SingleProductSideBar product={singleproduct} />
      <Container
        style={{
          width: "430px",
          height: "514px",
          top: "228px",
          left: "551px",
          position: "absolute",
          border: "5px solid red",
        }}
      ></Container>
      <Container
        style={{
          width: "84px",
          height: "24px",
          top: "228px",
          left: "551px",
          position: "absolute",
        }}
      ></Container>
      <Container
        style={{
          width: "24px",
          height: "24px",
          top: "228px",
          left: "551px",
          padding:
            "5.295000076293945px 3.2049999237060547px 5.295000076293945px 3.2049999237060547px",
          position: "absolute",
        }}
      >
        <Card.Img
          style={{
            width: "17.59000015258789px",
            height: "13.40999984741211px",
            top: "5.2950439453125px",
            left: "3.205078125px",
            position: "relative",
            color: "#00B517",
          }}
          src={Check}
        />
      </Container>
      <Card.Text
        style={{
          width: "384px",
          height: "56px",
          top: "257px",
          left: "551px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Title-H4;
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "28px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
          }}
        >
          Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
        </Typography>
      </Card.Text>
      <Card.Text
        style={{
          width: "58px",
          height: "24px",
          top: "228px",
          left: "577px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text normal;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "24px",
            letterSpacing: "-0.20000000298023224px",
            textAlign: "left",
            color: "#00B517",
          }}
        >
          In stock
        </Typography>
      </Card.Text>
      <Container
        style={{
          width: "366px",
          height: "20px",
          top: "322px",
          left: "551px",
          position: "absolute",
        }}
      ></Container>
      <Container
        style={{
          width: "80px",
          height: "15px",
          top: "324px",
          left: "551px",
          position: "absolute",
        }}
      >
        Rating
      </Container>
      <Container
        style={{
          width: "24px",
          height: "19px",
          top: "322px",
          left: "639px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text-base;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
          }}
        >
          9.3
        </Typography>
      </Container>
      <Container
        style={{
          width: "20px",
          height: "20px",
          top: "322px",
          left: "824px",
          border: "5px solid red",
          position: "absolute",
          padding:
            "2.0916669368743896px 0.8333346247673035px 2.091667413711548px 0.8333333134651184px",
        }}
      >
        <Card.Img
          style={{
            width: "18.333332061767578px",
            height: "15.816665649414062px",
            top: "2.0916748046875px",
            left: "0.83349609375px",
            position: "absolute",
            border: "2px solid green",
          }}
          src={Bag}
        />
      </Container>
      <Card.Text
        style={{
          width: "64px",
          height: "19px",
          top: "322px",
          left: "853px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text-base;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#787A80",
          }}
        >
          154 sold
        </Typography>
      </Card.Text>
      <Container
        style={{
          width: "112px",
          height: "20px",
          top: "322px",
          left: "691px",
          position: "absolute",
        }}
      >
        <Card.Img
          style={{
            width: "20px",
            height: "20px",
            top: "322px",
            left: "691px",
            padding:
              "1.6666666269302368px 1.6666654348373413px 1.6666654348373413px 1.6666666269302368px",
            position: "absolute",
          }}
        />
      </Container>
      <Card.Text
        style={{
          width: "83px",
          height: "19px",
          top: "322px",
          left: "720px",
          position: "absolute",
        }}
      >
        <Typography
          style={{
            //styleName: Text-base;
            fontFamily: "Inter",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0px",
            textAlign: "left",
            color: "#787A80",
          }}
        >
          32 reviews
        </Typography>
      </Card.Text>
      <Container
        style={{
          width: "430px",
          height: "72px",
          top: "353px",
          left: "551px",
          position: "absolute",
          border: "2px solid blue",
          display: "flex",
          gap: "16px",
        }}
      >
        {[
          { price: "98", text: "50-100pcs" },
          { price: "65", text: "50-100pcs" },
          { price: "67", text: "50-100pcs" },
        ].map((e) => {
          return <TradePriceComponent trade={e} />;
        })}
      </Container>
      <Container
        style={{
          width: "430px",
          height: "296px",
          top: "446px",
          left: "551px",
          border: "1px",
          position: "absolute",
          border: "3px solid black",
        }}
      >
        {["1", "2", "3"].map((e) => {
          return <TextDetailsComponent text={e} />;
        })}
      </Container>
      {/* <TradePriceComponent /> */}
    </>
  );
}

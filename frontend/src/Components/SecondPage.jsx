import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button, Typography } from "@mui/material";
import { FormControl } from "@mui/material";
import Slider from "@mui/material/Slider";
import PreviewContainer from "./PreviewContainer";
import { Row } from "react-bootstrap";
import BestTabComponent from "./BestTabComponent";
import BestTabComponent2 from "./BestTabComponent2";
import { useParams, useSearchParams } from "react-router-dom";
import BreadCrumbComponent from "./BreadCrumbComponent";
import SideBarComponent from "./SideBarComponent";
import { Card } from "react-bootstrap";

function valuetext(value) {
  return `$${value}`;
}

export default function SecondPage() {
  const [searchparam] = useSearchParams();
  const val = useParams().category;
  console.log(val);
  let searchTerm = searchparam.get("search");
  console.log(searchparam.get("search"));
  const products = [];
  const [value, setValue] = useState([2000, 3200]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${val}`)
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }, [val]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [display, setDisplay] = useState("hidden");
  const [brands, setBrands] = useState("none");
  const [brandnames, setBrandnames] = useState([]);
  const [feature, setFeature] = useState("none");
  const [featuretype, setFeatureType] = useState([]);
  console.log(brandnames);
  const handleBrandChange = (event) => {
    const index = brandnames.indexOf(event.target.value);
    if (index === -1) {
      setBrandnames([...brandnames, event.target.value]);
    } else {
      setBrandnames(brandnames.filter((b) => b !== event.target.value));
    }
  };
  const handleFeatureChange = (event) => {
    const index = featuretype.indexOf(event.target.value);
    if (index === -1) {
      setFeatureType([...featuretype, event.target.value]);
    } else {
      setFeatureType(featuretype.filter((b) => b !== event.target.value));
    }
  };
  return (
    <Container>
      <BreadCrumbComponent style={{ border: "2px solid black" }} />
      <Container
        style={{
          width: "240px",
          height: "1448px",
          top: "208px",
          left: "132px",
          borderRadius: "6px",
          // border: "1px solid red",
          position: "absolute",
        }}
      >
        <Card
          style={{
            width: "230px",
            height: "48px",
            // top: 208px
            // left: 132px
            padding: "12px 0px 12px 0px",
            border: "1px 0px 0px 0px",
          }}
        >
          <Card.Title
            style={{
              width: "73px",
              height: "19px",
              top: "14px",
              position: "relative",
            }}
          >
            <Typography
              style={{
                //styleName: Title-H6;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Category
            </Typography>
          </Card.Title>
          <Card
            style={{
              width: "24px",
              height: "24px",
              top: "-20px",
              left: "180px",
              padding: "8.295000076293945px 6px 8.295000076293945px 6px",
              border: "3px solid red",
            }}
            onClick={() => (display ? setDisplay("") : setDisplay("hidden"))}
          >
            <ArrowDropDown
              style={{
                width: "40px",
                height: "70px",
                // height: "7.409999847412109px",
                top: "8.2950439453125px",
                left: "6px",
                position: "relative",
                color: "black",
              }}
            />
          </Card>
          <div>
            <nav>
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
        </Card>
        <Card
          style={{
            width: "230px",
            height: "264px",
            // top: 456px
            // left: 132px
            border: "1px",
          }}
        >
          {" "}
          <Card.Title
            style={{
              width: "73px",
              height: "19px",
              top: "14px",
              position: "relative",
            }}
          >
            <Typography
              style={{
                //styleName: Title-H6;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Brands
            </Typography>
          </Card.Title>
          <Card
            style={{
              width: "24px",
              height: "24px",
              top: "-20px",
              left: "180px",
              padding: "8.295000076293945px 6px 8.295000076293945px 6px",
              border: "3px solid red",
            }}
            onClick={() =>
              brands == "none" ? setBrands("flex") : setBrands("none")
            }
          >
            <ArrowDropDown
              style={{
                width: "40px",
                height: "70px",
                // height: "7.409999847412109px",
                top: "8.2950439453125px",
                left: "6px",
                position: "relative",
                color: "black",
              }}
              size="70"
              onClick={() =>
                brands == "none" ? setBrands("flex") : setBrands("none")
              }
            />
          </Card>
          <Box sx={{ alignItems: "flex-start", display: `${brands}` }}>
            <FormControl error>
              {/* <FormLabel>brandnames</FormLabel> */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Samsung"
                      checked={brandnames.includes("Samsung")}
                      onChange={handleBrandChange}
                    />
                  }
                  label="Samsung"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Nokia"
                      checked={brandnames.includes("Nokia")}
                      onChange={handleBrandChange}
                    />
                  }
                  label="Nokia"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Micromax"
                      checked={brandnames.includes("Micromax")}
                      onChange={handleBrandChange}
                    />
                  }
                  label="Micromax"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Card>
        <Card
          style={{
            width: "230px",
            height: "264px",
            // top: 456px
            // left: 132px
            border: "1px",
          }}
        >
          {" "}
          <Card.Title
            style={{
              width: "73px",
              height: "19px",
              top: "14px",
              position: "relative",
            }}
          >
            <Typography
              style={{
                //styleName: Title-H6;
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "19px",
                letterSpacing: "0px",
                textAlign: "left",
              }}
            >
              Features
            </Typography>
          </Card.Title>
          <Card
            style={{
              width: "24px",
              height: "24px",
              top: "-20px",
              left: "180px",
              padding: "8.295000076293945px 6px 8.295000076293945px 6px",
              border: "3px solid red",
            }}
            onClick={() =>
              feature == "none" ? setFeature("flex") : setFeature("none")
            }
          >
            <ArrowDropDown
              style={{
                width: "40px",
                height: "70px",
                // height: "7.409999847412109px",
                top: "8.2950439453125px",
                left: "6px",
                position: "relative",
                color: "black",
              }}
              size="70"
              onClick={() =>
                feature == "none" ? setFeature("flex") : setFeature("none")
              }
            />
          </Card>
          <Box sx={{ alignItems: "flex-start", display: `${feature}` }}>
            <FormControl error>
              {/* <FormLabel>brandnames</FormLabel> */}
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Samsung"
                      checked={featuretype.includes("Mettalic")}
                      onChange={handleFeatureChange}
                    />
                  }
                  label="Samsung"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Nokia"
                      checked={featuretype.includes("Plastic Cover")}
                      onChange={handleBrandChange}
                    />
                  }
                  label="Nokia"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      value="Micromax"
                      checked={featuretype.includes("8 GB Ram")}
                      onChange={handleBrandChange}
                    />
                  }
                  label="Micromax"
                />
              </FormGroup>
            </FormControl>
          </Box>
        </Card>
        <Card
          style={{
            width: "230px",
            height: "208px",
            // top: 1024px
            // left: 134px
            borderRadius: "6px",
            border: "1px solid red",
          }}
        >
          <Card
            style={{
              width: "230px",
              height: "48px",
              // top: 1024px
              // left: 134px
              padding: "12px 0px 12px 0px",
              border: "1px 0px 0px 0px",
            }}
          >
            <Card.Title
              style={{
                width: "89px",
                height: "19px",
                top: "14px",
                position: "relative",
              }}
            >
              <Typography
                style={{
                  //styleName: Title-H6;
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "19px",
                  letterSpacing: "0px",
                  textAlign: "left",
                }}
              >
                Price range
              </Typography>
            </Card.Title>
            <Card
              style={{
                width: "24px",
                height: "24px",
                top: "-20px",
                left: "180px",
                padding: "8.295000076293945px 6px 8.295000076293945px 6px",
                border: "3px solid red",
              }}
              onClick={() =>
                feature == "none" ? setFeature("flex") : setFeature("none")
              }
            >
              <ArrowDropDown
                style={{
                  width: "40px",
                  height: "70px",
                  // height: "7.409999847412109px",
                  top: "8.2950439453125px",
                  left: "6px",
                  position: "relative",
                  color: "black",
                }}
                size="70"
                onClick={() =>
                  feature == "none" ? setFeature("flex") : setFeature("none")
                }
              />
            </Card>
          </Card>
          <Card
            style={{
              width: "230px",
              height: "152px",
              // top: 1080px
              // left: 134px
              borderRadius: "6px",
              border: "1px",
            }}
          >
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              step={200}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              min={1000}
              max={5000}
            />
            <Button variant="outlined">Apply</Button>
          </Card>
        </Card>
      </Container>
      <BestTabComponent />
      <Container
        style={{
          width: "920px",
          height: "1430px",
          top: "289px",
          left: "390px",
          position: "absolute",
          // border: "1px solid red",
        }}
      >
        {searchTerm ? console.log(searchTerm) : ""}
        {searchTerm
          ? categories
              .filter(({ title, category }) =>
                title.toLowerCase().includes(searchTerm)
              )
              .filter(
                ({ title }) =>
                  !searchTerm || title.toLowerCase().includes(searchTerm)
              )
              .map((product) => <PreviewContainer category={product} />)
          : categories
              .filter(
                ({ title }) =>
                  !searchTerm || title.toLowerCase().includes(searchTerm)
              )
              .map((product) => <PreviewContainer category={product} />)}
        {searchTerm
          ? categories
              .filter(({ title }) => {
                console.log(title);
                console.log(title.toLowerCase().includes(searchTerm));
                return title.toLowerCase().includes(searchTerm);
              })
              .map((product) => <PreviewContainer category={product} />)
          : ""}
        {console.log(products)}
        {console.log(categories)}
        {/* {categories.map((e) => (
          <PreviewContainer category={e} />
        ))} */}
      </Container>
    </Container>
  );
}

import React from "react";
import { Container, Col } from "react-bootstrap";
import styled from "styled-components";
import { ArrowDropDown } from "@styled-icons/material-outlined/ArrowDropDown";
import { useState, useEffect } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Button } from "@mui/material";
import { FormControl } from "@mui/material";
import Slider from "@mui/material/Slider";
import PreviewContainer from "./PreviewContainer";
import { Row } from "react-bootstrap";
import BestTabComponent from "./BestTabComponent";
import BestTabComponent2 from "./BestTabComponent2";
import { useParams, useSearchParams } from "react-router-dom";

function valuetext(value) {
  return `$${value}`;
}

export default function SecondPage() {
  const val = useParams().category;
  console.log(val);
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
    <Container className="d-flex mx-auto">
      <Row>
        <Col
          lg={3}
          md={0}
          sm={0}
          style={{ height: "1000px", border: "2px solid green" }}
        >
          <div className="mb-40">
            <div
              style={{
                border: "1px solid blue",
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
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
          <div className="mb-40">
            <div
              style={{
                border: "1px solid blue",
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Brands</b>
              <ArrowDropDown
                size="20"
                paddingRight="30"
                onClick={() =>
                  brands == "none" ? setBrands("flex") : setBrands("none")
                }
              />
            </div>
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
          </div>
          <div className="mb-40">
            <div
              style={{
                border: "1px solid blue",
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Feature</b>
              <ArrowDropDown
                size="20"
                paddingRight="30"
                onClick={() =>
                  feature == "none" ? setFeature("flex") : setFeature("none")
                }
              />
            </div>
            <Box sx={{ alignItems: "flex-start", display: `${feature}` }}>
              <FormControl error>
                {/* <FormLabel>brandnames</FormLabel> */}
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Mettalic"
                        checked={featuretype.includes("Mettalic")}
                        onChange={handleFeatureChange}
                      />
                    }
                    label="Mettalic"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="Plastic Cover"
                        checked={featuretype.includes("Plastic Cover")}
                        onChange={handleFeatureChange}
                      />
                    }
                    label="Plastic Cover"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="8 GB Ram"
                        checked={featuretype.includes("8 GB Ram")}
                        onChange={handleFeatureChange}
                      />
                    }
                    label="8 GB Ram"
                  />
                </FormGroup>
              </FormControl>
            </Box>
          </div>
          <div className="mb-40">
            <div
              style={{
                border: "1px solid blue",
                width: "100%",
                textAlign: "left",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <b>Price Range</b>
            </div>
            <Box sx={{ width: 300, mt: 5 }}>
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
            </Box>
          </div>
        </Col>
        <Col lg={9} style={{ border: "2px solid red" }}>
          <BestTabComponent />
          {categories.map((e) => (
            <PreviewContainer category={e} />
          ))}
        </Col>
      </Row>
    </Container>
  );
}

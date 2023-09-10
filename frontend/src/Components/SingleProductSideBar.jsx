import React from "react";
import CartPage2 from "./CartPage2";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SingleProductSideBar({ product }) {
  const navigate = useNavigate();
  const localcart = JSON.parse(localStorage.getItem("itemcart")) || [];
  console.log(localcart);
  const handlecart = () => {
    localStorage.setItem("itemcart", JSON.stringify([...localcart, product]));
    navigate("/cart2");
  };
  return (
    <>
      <Button onClick={handlecart}>Add to Cart</Button>
    </>
  );
}

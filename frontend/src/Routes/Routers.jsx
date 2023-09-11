import React from "react";
import { Routes, Route } from "react-router-dom";
import HeaderComponent from "../Parts/Header/HeaderComponent";
import Home from "../Pages/Home/Home";
import CategoryPage from "../Pages/Category/CategoryPage";
import SingleProduct from "../Components/SingleProductComponent/SingleProduct";
import FilterComponent from "../Components/GridViewComponent/FilterComponent";
import CartPage from "../Pages/Cart/CartPage";

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HeaderComponent />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/single/:id" element={<SingleProduct />} />
        <Route path="/filter/:category" element={<FilterComponent />} />
      </Route>
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

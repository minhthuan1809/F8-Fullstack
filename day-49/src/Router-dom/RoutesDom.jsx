import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Error from "./error/Error";
import DetailsProduct from "../components/DetailsProduct";

export default function RoutesDom() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/products/1" replace />} />
        <Route path="/products/:page" element={<Products />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/details/:name/:id/" element={<DetailsProduct />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

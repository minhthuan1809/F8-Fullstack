import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Products from "../components/Products";
import Cart from "../components/Cart";
import Error from "./error/Error";

export default function RoutesDom() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<Products />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

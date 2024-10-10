import React from "react";
import Navbar from "./header/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, PayCart } from "../redux/action/cartAction";
import { Link } from "react-router-dom";

export default function Cart() {
  const products = useSelector((state) => state.carts.ProductInCart);
  const dispatch = useDispatch();

  const cartLocal = JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice =
    cartLocal?.ProductInCart?.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ) || 0;
  const handleDelete = (product) => {
    if (confirm("Bạn muốn xóa sản phẩm !")) {
      dispatch(deleteCart(product));
    }
  };
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <h1 className="text-2xl font-bold text-center my-5 pt-[6rem]">
        SHOPPING CART
      </h1>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-5">
        {cartLocal.length === 0 ? (
          <p className="text-center text-gray-500">
            Giỏ hàng của bạn đang trống.
          </p>
        ) : (
          cartLocal.ProductInCart.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-4"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1 ml-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">
                  Giá: ${product.price.toLocaleString()}
                </p>
                <p className="text-gray-600">
                  Còn lại: {product.remaining - product.quantity}
                </p>
              </div>
              <div className="flex items-center">
                <button className="border px-2 py-1">-</button>
                <span className="mx-2">{product.quantity}</span>
                <button className="border px-2 py-1">+</button>
                <button
                  className="text-red-500 ml-4"
                  onClick={(e) => {
                    handleDelete(product);
                  }}
                >
                  Xóa
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between items-center bg-green-500 text-white p-4 mt-5 rounded-b-lg">
        <Link to="/">
          <button className="bg-yellow-500 px-4 py-2 rounded">Go home</button>
        </Link>
        <div>
          <span className="text-lg font-semibold">Total Price: </span>
          <span className="text-xl">${totalPrice.toLocaleString()}</span>
        </div>
        <button
          className="bg-green-700 px-4 py-2 rounded"
          onClick={() => {
            if (confirm("bạn muốn thanh toán")) {
              dispatch(PayCart());
            }
          }}
        >
          Thanh Toán
        </button>
      </div>
    </div>
  );
}

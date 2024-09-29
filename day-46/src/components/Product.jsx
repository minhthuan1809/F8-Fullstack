import React, { useEffect, useState } from "react";
import { loginApi, renderApi } from "../api/shopApi";

export default function Product() {
  const [product, setProduct] = useState({ listProduct: [] });

  const renderProducts = async () => {
    const response = await renderApi();
    setProduct(response.data || { listProduct: [] });
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div>
      <div>
        <h2 className="text-2xl text-center m-5">
          Chào bạn đến với show của Thuận
        </h2>
        <div>
          <p></p>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="logo"
          />
        </div>
      </div>

      <div className="w-[80%] m-auto rounded-xl bg-slate-400 h-full">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
          {product.listProduct.slice(0, 8).map((item, index) => (
            <li key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="w-[90%] overflow-hidden m-auto rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full mb-2 object-cover"
                />
              </div>
              <p className="text-center">{item.name}</p>
              <div className="flex justify-between items-center mt-2">
                <b className="text-lg">{item.price} VNĐ</b>
                <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Thêm giỏ hàng
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

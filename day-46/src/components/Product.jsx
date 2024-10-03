import React, { useContext, useEffect, useState } from "react";
import { renderApi } from "../api/shopApi";
import { nameContext } from "../App";
import Cart from "./Cart";
import { toast } from "react-toastify";

export default function Product() {
  const [product, setProduct] = useState({});
  const [logout, setLogout] = useState(false);
  const _nameProfile = useContext(nameContext);
  const [loading, setLoading] = useState(false);

  const handleAddCard = (item) => {
    const prevCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = prevCart.findIndex(
      (cartItem) => cartItem._id === item._id
    );

    toast.success("Đã thêm giỏ hàng thành công!");

    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = [...prevCart];
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart = [...prevCart, { ...item, quantity: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    return updatedCart;
  };

  const renderProducts = async () => {
    setLoading(true);
    const response = await renderApi();
    setProduct(response.data);
    setLoading(false);
  };

  useEffect(() => {
    renderProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-500"></div>
          <p className="text-xl ml-4">Loading...</p>
        </div>
      ) : (
        <div>
          <div className="w-4/5 m-auto flex items-center justify-between gap-2 ">
            <h2 className="text-2xl text-center m-5 ">WELCOME TO SHOP</h2>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setLogout((prev) => !prev)}
            >
              <b>{_nameProfile.profileName.name}</b>
              <div className="max-w-10 rounded-full overflow-hidden border-black border-solid border-[1px]">
                <img
                  className="w-full h-full"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  alt="logo"
                />
              </div>
            </div>
          </div>
          {/* Đăng xuất */}
          {logout && (
            <div className="relative w-4/5 m-auto">
              <div className="absolute right-0 bg-white p-3 rounded shadow-md z-50 border-black border-solid">
                <button
                  className="w-[200px] md:w-[150px] border border-black border-solid rounded-md"
                  onClick={_nameProfile.handleLogout}
                >
                  Đăng Xuất
                </button>
              </div>
            </div>
          )}

          {/* end */}
          <div className="w-[80%] m-auto rounded-xl bg-slate-400 h-full">
            <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
              {product.listProduct && product.listProduct.length > 0 ? (
                product.listProduct.map((item, index) => (
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
                      <button
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                        onClick={() => {
                          handleAddCard({
                            name: item.name,
                            quantity: 1,
                            exist: item.quantity,
                            price: item.price,
                            _id: item._id,
                          });
                        }}
                      >
                        Thêm giỏ hàng
                      </button>
                    </div>
                  </li>
                ))
              ) : (
                <p>Không có sản phẩm nào để hiển thị.</p>
              )}
            </ul>
            <Cart />
          </div>
        </div>
      )}
    </div>
  );
}

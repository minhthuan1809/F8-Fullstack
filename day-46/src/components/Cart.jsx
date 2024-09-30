import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [cart]);
  const handlePay = () => {
    try {
      setLoading(true);
      if (confirm("bạn muốn thanh toán ?")) {
        toast("Thanh Toán thành công !");
        localStorage.removeItem("cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Giỏ Hàng</h2>
      <table className="min-w-full border-collapse border border-gray-300">
        {cart.length > 0 ? (
          <>
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Tên sản phẩm
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Số lượng
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Còn lại
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Tổng tiền
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {item.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.exist - item.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.price * item.quantity} VNĐ
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4" className="text-center py-4">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handlePay}
                  >
                    {loading ? "Loading..." : "Thanh toán"}
                  </button>
                </td>
              </tr>
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td className="text-white text-2xl text-center py-4" colSpan="4">
                Giỏ hàng trống
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}

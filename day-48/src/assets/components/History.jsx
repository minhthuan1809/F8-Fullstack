import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function History() {
  const data = JSON.parse(localStorage.getItem("data"));
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const handleKeyDown = (event) => {
    if (sliderRef.current) {
      if (event.key === "ArrowRight") {
        sliderRef.current.slickNext();
      } else if (event.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lấy trạng thái dark mode từ localStorage
  const isDarkMode = data && data.darkMode;

  return (
    <div className="w-4/5 p-[2rem]">
      {data.payload && (
        <Slider ref={sliderRef} {...settings}>
          {data.payload.map((value, index) => (
            <div
              key={index}
              className={`w-full rounded-lg p-6 border border-teal-500 shadow-lg ${
                isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <h2 className="text-2xl font-bold text-center mb-4">
                Lịch sử Nhập Số
              </h2>
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="border-b-2 border-teal-500 py-2">
                      Số lần nhập
                    </th>
                    <th className="border-b-2 border-teal-500 py-2">
                      Số nhập vào
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {value.inputHistory.map((number, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-600 hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="py-2 text-teal-300 text-center">
                        {index + 1}
                      </td>
                      <td className="py-2 text-red-400 text-center">
                        {number}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 text-right">
                <p>
                  Lần chơi thứ:{" "}
                  <span className="font-semibold">
                    {value.playTimes} / {data.payload.length}
                  </span>
                </p>
                <p>
                  Số lần nhập tối đa:{" "}
                  <span className="font-semibold">{value.enterMax}</span>
                </p>
                <p className="text-red-400">
                  Tỷ lệ đúng:{" "}
                  <span className="font-semibold">{value.ratio}</span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
}

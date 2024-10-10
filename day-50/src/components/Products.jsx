import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import Navbar from "./header/Navbar";
import Pagination from "@mui/material/Pagination";
import { getProducts } from "../redux/middlewares/addProducts";
import { addCart } from "../redux/action/cartAction";

export default function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { page: urlPage } = useParams();
  const data = useSelector((state) => state.products.products);
  const TotalPage = useSelector((state) => state.products.totalPage);
  const loading = useSelector((state) => state.products.loading);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const pageNumber = parseInt(urlPage) || 1;
    setPage(pageNumber);
    dispatch(getProducts(pageNumber));
  }, [urlPage, dispatch]);

  const handlePageChange = (event, value) => {
    navigate(`/products/${value}`);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
        </div>
      ) : (
        <div className="bg-gray-100 min-h-screen">
          <header>
            <Navbar />
          </header>
          <main className="mt-[7rem] p-4 w-[85%] m-auto">
            <h1 className="text-center text-6xl font-sans font-bold text-slate-800 mb-6">
              Products
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {data.map((value) => (
                <Link
                  to={`/details/${value.name
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .replace(/ /g, "-")}/${value._id}`}
                  key={value._id}
                >
                  <div className="bg-white p-4 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">
                    <div className="flex justify-center mb-2 h-[20rem] w-[80%] m-auto overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
                      <img
                        className="object-cover h-full w-full rounded-md"
                        src={value.image}
                        alt="Product"
                      />
                    </div>
                    <p className="text-center font-semibold text-2xl mt-3">
                      {value.name}
                    </p>
                    <div className="flex justify-between items-center mt-2 text-xl">
                      <b>{value.price}$</b>
                      <button
                        className="bg-slate-600 text-white px-3 py-2 rounded hover:scale-110 transition-transform duration-300"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(addCart(value));
                        }}
                      >
                        <FontAwesomeIcon icon={faCartShopping} />
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex mt-5 justify-center text-2xl">
              <Pagination
                count={TotalPage}
                page={page}
                onChange={handlePageChange}
                sx={{
                  "& .MuiPaginationItem-root": {
                    fontSize: "1rem",
                  },
                }}
              />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

// import file
import { getDetails } from "../redux/middlewares/detailsMiddlewares";
import { addCart } from "../redux/action/cartAction";
import Navbar from "./header/Navbar";
export default function DetailsProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details.products);
  const loading = useSelector((state) => state.details.loading);

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  const _data = data.length > 0 ? data[0] : null;

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
        </div>
      ) : (
        <div>
          <Navbar />
          {_data ? (
            <div className="container mx-auto my-8 p-4 flex pt-[5rem]">
              <div className="w-1/3 p-4">
                <img
                  src={_data.image}
                  alt={_data.name}
                  className="border border-solid border-gray-400 rounded-lg"
                />
              </div>
              <div className="w-2/3 p-4">
                <h1 className="text-3xl font-bold text-purple-700">
                  {_data.name}
                </h1>
                <p className="text-lg font-medium text-gray-500">
                  {_data.brand}
                </p>
                <p className="my-4">{_data.description}</p>
                <p className="text-sm font-light text-gray-500">
                  category: {_data.category}
                </p>
                <div className="flex justify-between items-center mt-6">
                  <Link
                    to="/"
                    className="bg-purple-600 text-white py-2 px-4 rounded-md"
                  >
                    Go home
                  </Link>
                  <p className="text-3xl font-bold text-purple-700">
                    ${_data.price.toLocaleString()}
                  </p>
                  <button
                    className="bg-purple-600 text-white py-2 px-4 rounded-md"
                    onClick={() => dispatch(addCart(_data))}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center mt-20">No product details available.</p>
          )}
        </div>
      )}
    </div>
  );
}

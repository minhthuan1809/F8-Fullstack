import React, { useEffect, useState } from "react";
import "./index.css";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profileApi } from "./api/shopApi";
import Product from "./components/product";
// npm install --save react-toastify

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const apiKey = localStorage.getItem("apikey");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (apiKey) {
        const data = await profileApi(apiKey);
        console.log(data);

        if (data) {
          if (data.code === 401) {
            setIsLoggedIn(false);
          }
          if (data.code === 200) {
            setIsLoggedIn(true);
            toast.success(`Xin Chào ${data.data.emailId.name}`);
          }
        } else {
          setIsLoggedIn(false);
        }
      } else {
        setIsLoggedIn(false);
      }
    };

    fetchProfile();
  }, [apiKey]);

  return (
    <div>
      {console.log("Gmail : thuan18092003@gmail.com")}
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <Product />
      )}
      <ToastContainer />
    </div>
  );
}

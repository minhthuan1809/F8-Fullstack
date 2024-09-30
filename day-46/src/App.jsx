import React, { createContext, useEffect, useState } from "react";
import "./index.css";
import Login from "./components/Login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { profileApi } from "./api/shopApi";
import Product from "./components/product";

export const nameContext = createContext();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profileName, setProfileName] = useState({});
  const apiKey = localStorage.getItem("apikey");

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    if (confirm("Bạn chắc chắn muốn đăng xuất!")) {
      localStorage.removeItem("apikey");
      localStorage.removeItem("card");
      setIsLoggedIn(false);
      toast.info("Bạn đã đăng xuất!");
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      if (apiKey) {
        const data = await profileApi(apiKey);

        if (data) {
          if (data.code === 200) {
            setProfileName({ name: data.data.emailId.name });
            setIsLoggedIn(true);
          }
        } else {
          toast.info("Bạn cần đăng nhập lại !");
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
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <nameContext.Provider value={{ profileName, handleLogout }}>
          <Product />
        </nameContext.Provider>
      )}
      <ToastContainer />
    </div>
  );
}

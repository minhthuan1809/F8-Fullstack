"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FaHome,
  FaSearch,
  FaFacebookF,
  FaYoutube,
  FaMoon,
} from "react-icons/fa";

const Nav = ({ darkMode, setDarkMode, path }) => {
  const router = useRouter();

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
  }, [setDarkMode]);

  const handleDarkModeToggle = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", newDarkMode);
  };

  const toggleLanguage = () => {
    router.push(path === "en" ? "vn" : "en");
  };

  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow-sm">
      <div className="flex items-center">
        <FaHome className="text-green-500" size={24} />
        <span className="ml-2 font-semibold">The Example Name</span>
        <Link href="/" className="ml-4 text-green-500 hover:text-green-600">
          Home
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-600" size={20} />
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-gray-600" size={20} />
        </a>
        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="text-gray-600" size={20} />
        </Link>
        <button
          className="p-1 rounded-full bg-gray-200"
          onClick={handleDarkModeToggle}
        >
          <FaMoon
            className={`${darkMode ? "text-yellow-500" : "text-gray-600"}`}
            size={20}
          />
        </button>
        <button
          className="px-3 py-1 text-sm bg-gray-200 rounded-md"
          onClick={toggleLanguage}
        >
          {path}
        </button>
      </div>
    </nav>
  );
};

export default Nav;

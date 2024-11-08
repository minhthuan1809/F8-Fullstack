"use client";

import { Avatar } from "@nextui-org/avatar";
import { Facebook, Moon, Sun, Youtube } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Nav() {
  const { user, error, isLoading } = useUser();
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState("light");
  const { theme, setTheme } = useTheme();
  const path = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/profile", label: "Profile" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com",
      icon: <Facebook className="text-blue-600" size={21} />,
      label: "Facebook",
    },
    {
      href: "https://youtube.com",
      icon: <Youtube className="text-red-600" size={21} />,
      label: "Youtube",
    },
  ];

  const toggleDarkMode = () => {
    if (mounted === "dark") {
      setMounted("light");
      setDarkMode(true);
    }
    if (mounted === "light") {
      setMounted("dark");
      setDarkMode(false);
    }
    setTheme(mounted);
    console.log(theme);
  };

  return (
    <nav className="bg-white shadow-md dark:bg-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Avatar
              isBordered
              radius="full"
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-10 h-10"
            />
          </div>

          <div className="flex items-center space-x-6 mx-4 flex-grow justify-center">
            {navLinks.map((link) => {
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={
                    path === link.href
                      ? "text-blue-600"
                      : "hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200 font-medium px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center p-14 space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={` "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"`}
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            ))}

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 
                       transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="text-amber-500" size={21} />
              ) : (
                <Moon className="text-blue-600" size={21} />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

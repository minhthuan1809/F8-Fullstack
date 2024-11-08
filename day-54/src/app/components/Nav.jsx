// app/components/NavBar.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const { user, isLoading } = useUser();
  const pathname = usePathname();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Mark as client once the component mounts
  }, []);

  const dataNav = [
    { id: 1, title: "Trang Chủ", path: "/" },
    { id: 2, title: "Giới Thiệu", path: "/about" },
    { id: 3, title: "Tính Năng", path: "/features" },
    { id: 4, title: "Bảng Giá", path: "/price" },
    { id: 5, title: "Liên Hệ", path: "/contact" },
  ];

  const isActive = (path) => {
    return pathname === path || (path === "/" && pathname !== "/");
  };

  if (!isClient) {
    return null; // Prevent rendering until client is ready
  }

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              MINHTHUAN
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <ul className="hidden md:flex items-center gap-6">
              {dataNav.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={`font-medium transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              {isLoading ? (
                <div className="w-24 h-8 bg-gray-200 animate-pulse rounded" />
              ) : user ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {user.name || user.email}
                  </span>
                  <Link
                    href="/api/auth/logout"
                    className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-200"
                  >
                    Đăng Xuất
                  </Link>
                </div>
              ) : (
                <>
                  <Link
                    href="/api/auth/login "
                    className="font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    Đăng Nhập
                  </Link>
                  <Link
                    href="/api/auth/login"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
                  >
                    Đăng Ký
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

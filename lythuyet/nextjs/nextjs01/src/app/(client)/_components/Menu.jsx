"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  console.log(pathname);
  const activeItem = (path) => {
    return path === pathname;
  };
  return (
    <div>
      <h3>menu</h3>
      <ul>
        <li className={activeItem("/") ? "active" : ""}>
          <Link href="/">trang chủ</Link>
        </li>
        <li className={activeItem("/about") ? "active" : ""}>
          <Link href="/about">Giới thiệu</Link>
        </li>
        <li className={activeItem("/products") ? "active" : ""}>
          <Link href="/products">Sản phẩm</Link>
        </li>
      </ul>
    </div>
  );
}

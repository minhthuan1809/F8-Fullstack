import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    if (!req.nextauth.token) {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Cấu hình những route cần bảo vệ
export const config = {
  matcher: [
    // Những route cần auth
    "/dashboard/:path*",
    "/profile/:path*",
    // Thêm các protected route khác ở đây
  ],
};

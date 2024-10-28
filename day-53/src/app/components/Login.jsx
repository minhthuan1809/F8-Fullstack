"use client";
import { useSession } from "next-auth/react";
import React from "react";
import { Chrome, Github, ArrowRight } from "lucide-react";
import { signIn } from "next-auth/react";

export default function PageLogin() {
  const { data: session } = useSession();

  const handleGithubLogin = () => {
    signIn("github", {
      callbackUrl: window.location.origin,
      redirect: true,
    });
  };

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: window.location.origin,
      redirect: true,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {!session ? (
          <div className="py-8 px-4 shadow-lg rounded-2xl">
            {/* Login Header */}
            <div className="text-center mb-8">
              <p>Đăng nhập để truy cập tài khoản của bạn</p>
            </div>

            {/* Login Options */}
            <div className="space-y-4">
              <button
                onClick={handleGithubLogin}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                <Github className="w-5 h-5" />
                <span className="font-medium">Đăng nhập với Github</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
              </button>

              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Chrome className="w-5 h-5" />
                <span className="font-medium">Đăng nhập với Google</span>
                <ArrowRight className="w-4 h-4 ml-2 opacity-70" />
              </button>
            </div>

            {/* Divider */}
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">
                  Bảo mật và tiện lợi
                </span>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                Bằng việc đăng nhập, bạn đồng ý với{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Điều khoản sử dụng
                </a>{" "}
                và{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white p-8 shadow-lg rounded-2xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Đăng nhập thành công
              </h2>
            </div>

            <div className="flex flex-col items-center gap-4">
              {session.user?.image && (
                <div className="relative">
                  <img
                    src={session.user.image}
                    alt="Profile"
                    className="w-20 h-20 rounded-full border-4 border-teal-500"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
              )}
              <div className="flex flex-col items-center text-center">
                <span className="text-xl font-bold text-gray-800">
                  {session.user?.name}
                </span>
                <span className="text-sm text-gray-600">
                  {session.user?.email}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

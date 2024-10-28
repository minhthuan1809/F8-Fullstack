"use client";
import React from "react";
import { LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import PageLogin from "../components/Login";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!session) {
    return <PageLogin />;
  }

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-2xl mx-auto  rounded-xl shadow-lg p-6">
        <div className="space-y-6">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            {session.user?.image && (
              <div className="relative">
                <img
                  src={session.user.image}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border-4 border-teal-500"
                />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            )}
            <div className="flex flex-col">
              <span className="text-xl font-bold ">{session.user?.name}</span>
              <span className="text-sm text-gray-600">
                {session.user?.email}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t"></div>

          {/* Profile Actions */}
          <div className="flex justify-end">
            <button
              onClick={() => signOut()}
              className="flex items-center gap-2 px-6 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-200"
            >
              <LogOut className="w-5 h-5" />
              <span>Đăng xuất</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

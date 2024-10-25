"use client";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
export default function ThemeProvider({ children }) {
  return (
    <div>
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </div>
  );
}

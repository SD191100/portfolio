"use client";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import React from "react";

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    {...props}>{children}</NextThemesProvider>
}

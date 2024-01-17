"use client"

import { ThemeProvider } from "next-themes";
import { Toaster } from "./ui/toaster";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </>
  );
}

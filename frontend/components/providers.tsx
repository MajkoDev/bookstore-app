"use client";

import { CartProvider } from "use-shopping-cart";
import { ThemeProvider } from "next-themes";
import { Toaster } from "./ui/toaster";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <CartProvider
      currency="USD"
      shouldPersist
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        {children}
      </ThemeProvider>
    </CartProvider>
  );
}

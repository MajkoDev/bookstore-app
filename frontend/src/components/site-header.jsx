import { NavLink } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between space-x-4 px-6 sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <NavLink href="/" className="flex items-center space-x-2">
            <span className="inline-block text-xl font-bold">BookStore</span>
          </NavLink>
        </div>

        <div className="flex items-center space-x-1">
          <NavLink to="/cart">
            <Button size="sm" variant="ghost">
              <ShoppingBag className="h-5 w-5" />
              <span className="ml-2 text-sm font-bold">{0}</span>
              <span className="sr-only">Cart</span>
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

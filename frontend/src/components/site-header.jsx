import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full py-2 px-6 md:px-12 lg:px-20">
      <div className="flex flex-row justify-between items-center gap-2">
        <h2 className="text-center text-xl font-light">Header</h2>
        <div className="flex flex-row gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </div>
      </div>
    </header>
  );
}

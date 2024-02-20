// Context

// Router
import { Outlet } from "react-router";

// Components
import Footer from "./site-footer";
import Header from "./site-header";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      <main className="p-12 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

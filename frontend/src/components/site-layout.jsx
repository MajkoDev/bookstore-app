// Context

// Router
import { Outlet } from "react-router";

// Components
import Footer from "./site-footer";
import Header from "./site-header";
import AppContext from "@/context";

export default function RootLayout() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <AppContext>
        <Header />
        <main className="p-12 flex-1">
          <Outlet />
        </main>
        <Footer />
      </AppContext>
    </div>
  );
}

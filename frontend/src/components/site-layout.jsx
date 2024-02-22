// Context
import AppContext from "@/context";

// Router
import { Outlet } from "react-router";

// Components
import Footer from "./site-footer";
import Header from "./site-header";

export default function RootLayout() {
  return (
    <>
      <AppContext>
        <Header />
        <div className="px-[1.4rem] md:px-[4rem] lg:px-[6rem] xl:px-[8rem] 2xl:px-[12rem]">
          <Outlet />
        </div>
        <Footer />
      </AppContext>
    </>
  );
}

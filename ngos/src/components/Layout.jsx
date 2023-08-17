import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="fixed w-full border-yellow-300 z-40">
        <Navbar />
      </div>
      <div className="z-20">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

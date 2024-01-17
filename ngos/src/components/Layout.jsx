import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <div className="fixed w-full  z-40">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;

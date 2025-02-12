import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Footer2 from "./footer2";

function Layout() {
  return (
    <>
      <div className=" w-full  z-40">
        <Navbar />
      </div>
      <div className="">
        <Outlet />
      </div>
      <div>
        {/* <Footer /> */}
        <Footer/>
      </div>
    </>
  );
}

export default Layout;

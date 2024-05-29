import { useState } from "react";
import logo from "../assets/images/glo 1.png";
import { Facebook } from "./icons/facebook";
import { Instagram } from "./icons/instagram";
import { Twitter } from "./icons/twitter";
import { Linked } from "./icons/linked";

function Footer() {
  // const [data, setData] = useState("");

https://x.com/globallygreeen?s=11&t=4l2HUMuNGpBM8P0KTfmOkg

https://www.threads.net/@globallygreen_

https://www.instagram.com/globallygreen_?igsh=MWN6NmgzcnF0bnpxNw%3D%3D&utm_source=qr

https://www.facebook.com/profile.php?id=100067696505323&mibextid=ZbWKwL






  const changeHandler = (e) => {
   console.log(e);
   window.open(``)
  };
  return (
    <>
      <footer id="ct" className="   shadow-inner py-10 text-main3">
        <div className="grid  w-90   lg:grid-cols-6   sm:grid-cols-1 gap-1">
          <div></div>
          <div className="col-span-2   text-[em]">
            <img className="h-[10em] w-[25em]"  src={logo} alt="" />
          </div>
          <div className="col-span-3  grid pt-5 justify-items-center  lg:grid-cols-4 grid-cols-2 ">
            <div className="py-2">
              <div className="font-bold text-[1.2em] text-center py-3">
                Sectors
              </div>
              <ul className="text-[1em]">
                <li className="hover:underline pointer-cursor">Climate Change</li>
                <li className="hover:underline">Circular Economy</li>
              </ul>
            </div>
            <div className="py-3">
              <div className="font-bold text-[1.2em] text-center py-2">
                Company
              </div>
              <ul className="text-[1em] ">
                <li className="hover:underline">About Us</li>
                <li className="hover:underline">Our Works</li>
              </ul>
            </div>
            <div className="py-3  col-span-2 lg:col-span-1">
              <div className="font-bold text-[1.2em] text-center py-2">Socials</div>
              <ul className="text-[1em] grid lg:grid-cols-1  md:grid-cols-1 gap-8 lg:gap-1 grid-cols-4 ">
                <li onClick={changeHandler('')} className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Instagram />
                  </span>{" "}
                  <span className="hidden  md:block lg:block">Instagram</span>{" "}
                </li>

                <li onClick={changeHandler('')} className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Facebook />
                  </span>{" "}
                  <span className="hidden  md:block lg:block" >Facebook</span>{" "}
                </li>
                <li onClick={changeHandler('')}  className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Twitter />
                  </span>{" "}
                  <span className="hidden  md:block lg:block">X</span>{" "}
                </li>

                <li onClick={changeHandler('')} className="flex py-1 hover:underline ">
                  <span className="px-1">
                    <Linked />
                  </span>{" "}
                  <span className="hidden md:block  lg:block">Linkedin</span>{" "}
                </li>
              </ul>
            </div>  
            {/* <div className="py-3">
              <div className="font-bold text-[1.2em] text-center py-2">
                Make DONATION
              </div>
              <ul className="text-[0.9em] ">
                <li className="">About Us</li>
                <li>Our Works</li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="py-2 mt-10 text-center  w-full text-[0.9em]">
          {" "}
          © Copyright 2024{" "}
        </div>
      </footer>
    </>
  );
}

export default Footer;

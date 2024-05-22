import { useState } from "react";
import logo from "../assets/images/logo 3.png";
import { Facebook } from "./icons/facebook";
import { Instagram } from "./icons/instagram";
import { Twitter } from "./icons/twitter";
import { Linked } from "./icons/linked";

function Footer() {
  const [data, setData] = useState("");
  const changeHandler = (e) => {
    const info = e.target.value;
    setData(info);
  };
  return (
    <>
      <footer id="ct" className="   shadow-inner py-10 text-main3">
        <div className="grid  w-90   lg:grid-cols-6 sm:grid-cols-1 gap-3">
          <div></div>
          <div className="text-[8em]">
            <img className="" src={logo} alt="" />
          </div>
          <div className="col-span-3  grid pt-5 justify-items-center  lg:grid-cols-4 sm:grid-cols-4 ">
            <div className="py-2">
              <div className="font-bold text-[1.2em] text-center py-3">
                Sectors
              </div>
              <ul className="text-[0.9em]">
                <li>Climate Change</li>
                <li>Circular Economy</li>
              </ul>
            </div>
            <div className="py-3">
              <div className="font-bold text-[1.2em] text-center py-2">
                Company
              </div>
              <ul className="text-[0.9em] ">
                <li className="">About Us</li>
                <li>Our Works</li>
              </ul>
            </div>
            <div className="py-3">
              <div className="font-bold text-[1.2em] text-center py-2">Socials</div>
              <ul className="text-[0.9em] grid lg:grid-cols-1  gap-8 lg:gap-1 grid-cols-4 ">
                <li className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Instagram />
                  </span>{" "}
                  <span className="hidden  lg:block">Instagram</span>{" "}
                </li>

                <li className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Facebook />
                  </span>{" "}
                  <span className="hidden  lg:block" >Facebook</span>{" "}
                </li>
                <li className="flex py-1 hover:underline">
                  <span className="px-1">
                    <Twitter />
                  </span>{" "}
                  <span className="hidden  lg:block">X</span>{" "}
                </li>

                <li className="flex py-1 hover:underline ">
                  <span className="px-1">
                    <Linked />
                  </span>{" "}
                  <span className="hidden  lg:block">Linkedin</span>{" "}
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

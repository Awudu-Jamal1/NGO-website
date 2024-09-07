import { useState } from "react";
import logo from "../assets/images/glo 1.png";
import { Facebook } from "./icons/facebook";
import { Instagram } from "./icons/instagram";
import { Twitter } from "./icons/twitter";
import { Linked } from "./icons/linked";

function Footer() {
  //  const [data, setData] = useState("");

  const xs = "https://x.com/globallygreeen?s=11&t=4l2HUMuNGpBM8P0KTfmOkg";
  const thre = "https://www.threads.net/@globallygreen_";
  const insta =
    "https://www.instagram.com/globallygreen_?igsh=MWN6NmgzcnF0bnpxNw%3D%3D&utm_source=qr";

  const face =
    "https://www.facebook.com/profile.php?id=100067696505323&mibextid=ZbWKwL";

  const changeHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <footer id="" className="   px-2 py-2 text-main3">
        <div className="grid    w-90   lg:grid-cols-2 sm:grid-cols-1 gap-1">
          
          <div className="  flex justify-center md:justify-center lg:justify-end  text-[em]">
            <img className="h-[20em] w-[70em]" src={logo} alt="" />
          </div>
          <div className="col-span-1  max-w-md   grid pt-5 justify-items-center  grid-cols-2 ">
            <div className="py-2 pt-5">
              <div className="font-semibold text-[20px]  py-3">
                SECTORS
              </div>
              <ul className="text-[18px] list-disc">
                <li className="hover:underline pointer-cursor py-3">
                  CLIMATE CHANGE
                </li>
                <li className="hover:underline py-3">CIRCULAR ECONOMY</li>
                <li className="hover:underline py-3">CONSERVATION</li>
              </ul>
            </div>
            {/* <div className="py-3">
              <div className="font-bold text-[1.2em] text-center py-2">
                Company
              </div>
              <ul className="text-[1em] ">
                <li className="hover:underline">About Us</li>
                <li className="hover:underline">Our Team</li>
                <li className="hover:underline">Our Work</li>
              </ul>
            </div> */}
            <div className="py-3  pt-5 lg:col-span-1 ">
              <div className="font-semibold text-[20px] pttext-center py-2">
                Socials
              </div>
              <ul className="text-[18px] lg:grid-cols-1  md:grid-cols-1 gap-8 lg:gap-1 ">
                <li
                  onClick={() => window.open(insta, "_blank")}
                  className="flex py-2  cursor-pointer hover:underline"
                >
                  <span className="px-1">
                    <Instagram />
                  </span>{" "}
                  <span className=" md:block lg:block">Instagram</span>{" "}
                </li>

                <li
                  onClick={() => window.open(face, "_blank")}
                  className="flex py-2  cursor-pointer hover:underline"
                >
                  <span className="px-1">
                    <Facebook />
                  </span>{" "}
                  <span className="  md:block lg:block">Facebook</span>{" "}
                </li>
                <li
                  onClick={() => window.open(xs, "_blank")}
                  className="flex py-2  cursor-pointer hover:underline"
                >
                  <span className="px-1">
                    <Twitter />
                  </span>{" "}
                  <span className="  md:block lg:block">X</span>{" "}
                </li>

                <li
                  onClick={changeHandler("")}
                  className="flex py-2  cursor-pointer hover:underline "
                >
                  <span className="px-1">
                    <Linked />
                  </span>{" "}
                  <span className=" md:block  lg:block">Linkedin</span>{" "}
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
        <div className="py-2 mt-3 text-center  w-full text-[0.9em]">
          {" "}
          © Copyright 2024{" "}
        </div>
      </footer>
    </>
  );
}

export default Footer;

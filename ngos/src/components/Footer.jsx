import { useState } from "react";
import logo from "../assets/images/glo 1.png";
import footin from "../assets/images/footer2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faLinkedin,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { PhoneIcon } from "@heroicons/react/24/outline";

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
      <footer
        style={{
          backgroundImage: `url(${footin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="py-24 bg-footer"
      >
        <div className="grid grid-cols-3 gap-10 max-w-6xl m-auto text-white">
          <div>
            <div>
              <img src={logo} className="h-36" alt="" />
            </div>
            <p className="py-3 text-white">
              Inspiring millions of individuals around the globe to protect the environment.
            </p>
            <div className="py-3 text-white">
              <PhoneIcon className=" inline-block text-white text-sm h-5" />{" "}
              <span className="text-white">0592400229 / 0551698607</span>
            </div>
            <p className="py-0.5 max-w-xs leading-8 text-white">
            Hse No.30 Ritz Junction, Ashale Botwe Nmai Dzorn Road Madina, Accra, Ghana
            </p>
            <div className="flex gap-10 py-5 text-main4">
              <div className="bg-main4 h-8   w-8  place-content-center  text-center rounded-full">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  className="text-white text-sm"
                />
              </div>
              <div className="bg-main4 h-8   w-8  place-content-center  text-center rounded-full">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="text-white text-sm"
                />
              </div>
              <div className="bg-main4 h-8 text-white   w-8 place-content-center  text-center rounded-full">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="text-white text-sm"
                />
              </div>
            </div>
          </div>

          <div className="col-span-2 text-white">
            <div className="border-b border-b-main4 pb-24">
              <p className="font-semibold text-2xl leading-relaxed capitalize py-8 text-white">
                " Here for our Planet.
                Here to inspire the next Generation to climate change. "
              </p>

              <div>
                <button className="text-lg bg-main4 text-white py-3 px-8 rounded-full">
                  Donate now
                </button>
              </div>
            </div>
            <div className="flex justify-between text-white py-10">
              <div className="text-white">JawduTech © 2025 </div>
              <div>
                {" "}
                <span className=" text-white border-r border-r-white  px-4">
                  Privacy Policy
                </span>
                <span className="px-4 text-white">Terms & Conditions</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

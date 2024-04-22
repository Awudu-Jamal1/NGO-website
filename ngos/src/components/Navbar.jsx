import { useState } from "react";

import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT US", href: "#about" },
  { name: "OUR WORK", href: "#ow" },
  { name: "OUR TEAM", href: "#ot" },
  { name: "CONTACT US", href: "#ct" },
];

import logo from "../assets/images/logo 2.png"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const back =  "bg-white " ;
  const col =  "2main" ;
  // const styles ="absolute flex w-full  bg-main items-center justify-between p-6 lg:px-8"
  return (
    <>
      <nav
        className={` flex w-full   items-center  shadow-lg justify-between p-2 lg:px-6  sm:py-2 ${back}`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1 ">
          <a href="#home" className="-m-1.5 p-1.5  text-white">
            <span className="sr-only">Your Company</span>

            <img style={{}} src={logo} alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-main3"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex  lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`hover:underline text-[0.75rem] font-semibold text-main3`}
            >
              <div>{item.name}</div>
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end   ">
          <a
            href="#"
            className={`text-[0.7rem] font-semibold leading-6 text-main3 hover:text-teal text-main3 `}
          >
            DONATE{" "}
            <span aria-hidden="true">
              <HeartIcon className="h-3 w-5 inline" />
            </span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden text-main"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[50%] overflow-y-auto  bg-white text-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-main"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}

export default Navbar;

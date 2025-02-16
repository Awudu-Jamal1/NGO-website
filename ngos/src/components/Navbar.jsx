import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import logo from "../assets/images/glo 1.png";
Link
const navigation = [
  { name: "HOME", to: "/" },
  { name: "ABOUT US", to: "about" },
  { name: "OUR TEAM", to: "our team"},
  { img: logo, to: "/"},

  { name: "OUR WORK", to: "our Work"},
  { name: "CONTACT US", to: "contact" },
  { name: "DONATE ", to: "" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full lg:flex-col fex-row items-center shadow-sm justify-between p-2 lg:px-6 sm:py-2 bg-gray-200" aria-label="Global">
        {/* <div className="flex lg:flex- ">
          <Link to="/" className="-m-1.5 p-1.5  text-white">
            <span className="sr-only">Your Company</span>
            <img  className="h-[10em] w-[25em]" src={logo} alt="" />
          </Link>
        </div> */}
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
        <div className="hidden lg:flex  lg:gap-x-12 px-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
             
              className={`hover:underline text-sm flex place-items-center  font-semibold capitalize tracking-wide  cursor-pointer`}
            >
              {item.name}
              <img src={item.img}  className="h-16" alt="" />
            </Link>
          ))}
        </div>
       
      </nav>
      <Dialog as="div" className="lg:hidden text-main3" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[50%] overflow-y-auto bg-white text-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
             {/* <span className="sr-only">Your Company</span>*/}
              {/* <img className="h-8 w-auto" src={logo} alt="" /> */}
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-main3"
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
                  <Link
                    key={item.name}
                    to={item.to}
                    
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
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

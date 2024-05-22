import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import logo from "../assets/images/logo 2.png";

const navigation = [
  { name: "HOME", to: "home" },
  { name: "ABOUT US", to: "about" },
  { name: "OUR WORK", to: "ow" },
  { name: "OUR TEAM", to: "ot" },
  { name: "CONTACT US", to: "ct" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex w-full flex-col items-center shadow-lg justify-between p-2 lg:px-6 sm:py-2 bg-white" aria-label="Global">
        <div className="flex lg:flex- py-8">
          <a href="#home" className="-m-1.5 p-1.5  text-white">
            <span className="sr-only">Your Company</span>
            <img  className="h-[8em]" src={logo} alt="" />
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
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500}
              className={`hover:underline text-[0.75rem] font-semibold text-main3`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link to="do" spy={true}
              smooth={true}
              offset={-70} // Adjust offset as needed
              duration={500} className={`text-[0.7rem] font-semibold leading-6 text-main3 hover:text-teal text-main3`}>
            DONATE <HeartIcon className="h-3 w-5 inline" />
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden text-main" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[50%] overflow-y-auto bg-white text-main px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src={logo} alt="" /> */}
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
                  <Link
                    key={item.name}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70} // Adjust offset as needed
                    duration={500}
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

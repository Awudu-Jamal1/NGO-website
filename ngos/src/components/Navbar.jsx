import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/glo 1.png";

const leftNav = [
  { name: "HOME", to: "/" },
  { name: "ABOUT US", to: "/about" },
  { name: "OUR TEAM", to: "/our-team" },
];

const rightNav = [
  { name: "OUR WORK", to: "/our-work" },
  { name: "CONTACT US", to: "/contact" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        
        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-8">
          {leftNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => 
                `text-sm font-bold tracking-widest hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-gray-700'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="flex lg:mx-12">
          <Link to="/" className="-m-1.5 p-1.5">
            <img className="h-12 w-auto md:h-16 transition-transform hover:scale-105" src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Right Nav + Donate */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-x-8">
          {rightNav.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => 
                `text-sm font-bold tracking-widest hover:text-red-600 transition-colors ${isActive ? 'text-red-600' : 'text-gray-700'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
          
          <Link
            to="/donate"
            className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-red-700 transition-all active:scale-95"
          >
            <HeartIcon className="h-4 w-4" />
            DONATE
          </Link>
        </div>

        {/* Empty div for mobile layout balance */}
        <div className="flex lg:hidden flex-1 justify-end">
             <Link to="/donate" className="text-red-600"><HeartIcon className="h-7 w-7" /></Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-10 flow-root">
            <div className="-my-6 divide-y divide-gray-100">
              <div className="space-y-4 py-6">
                {[...leftNav, ...rightNav].map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg px-3 py-2 text-xl font-bold tracking-wide text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/donate"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-4 text-lg font-bold text-white"
                >
                  <HeartIcon className="h-5 w-5" />
                  DONATE NOW
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;

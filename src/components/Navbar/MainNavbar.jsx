import React, { useState } from "react";
import { Phone, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import HamBurgerOverlay from "./HamBurgerOverlay";

function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const NavLink = ({ to, children }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`transition-colors duration-200 ${
          isActive ? 'text-amber-300' : 'text-white hover:text-amber-300'
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <div className="relative flex justify-between items-center py-5 md:py-10 px-7 md:px-15 lg:px-50 shadow-sm overflow-hidden bg-white">
        {/* Blue slanted background shape */}
        <div
          className="absolute top-0 left-0 h-full w-[80%] bg-[#0A3D62] z-10"
          style={{
            clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
          }}
        ></div>

        <Link to='/' className="lg:hidden z-20 block font-bold text-2xl text-white">
          <img src="./logo/logo2.PNG" className="w-44 h-9 md:w-55 md:h-11" alt="KingHaven_logo" />
        </Link>

        <div className="hidden lg:flex gap-26 z-20 text-white">
          <Link to='/' className="font-bold text-2xl z-20 text-white hover:text-amber-300 transition-colors duration-200">
            <img src="./logo/logo2.PNG" className="w-50 h-10 " alt="KingHaven_logo" />
          </Link>
          <ul className="flex gap-8 text-lg cursor-pointer items-center">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>About Us</NavLink>
            </li>
            <li>
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"/refund-policy"}>Refund Policy</NavLink>
            </li>
          </ul>
        </div>

        <Link to="tel:+16592135042" className="hidden lg:block p-3 px-5 border text-lg bg-[#0A3D62] text-white cursor-pointer transition-colors duration-300 z-20 hover:text-[#0A3D62] hover:border-[#0A3D62] hover:bg-white">
          <div className="flex gap-2 items-center">
            <Phone className="w-3.5" />
            <span>+1 659 213 5042</span>
          </div>
        </Link>

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden p-2 md:p-3 rounded-sm border bg-[#0A3D62] flex items-center justify-center z-20"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>

        <HamBurgerOverlay setIsOpen={setIsOpen} isOpen={isOpen}/>
      </div>
    </>
  );
}

export default MainNavbar;
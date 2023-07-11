/** @format */

import NavItems from "./NavItems";
import logo from "../../../public/logo.png";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="navbar bg-[rgb(0,0,0,0.5)] md:px-6 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            onClick={() => setShowNav(!showNav)}
            tabIndex={0}
            className="btn btn-ghost text-xl lg:hidden"
          >
            {showNav ? <RxCross2 /> : <RxHamburgerMenu />}
          </label>
          {showNav && (
            <div
              tabIndex={0}
              onClick={() => setShowNav(!showNav)}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[calc(100vw-20px)] space-y-6 font-semibold"
            >
              <NavItems />
            </div>
          )}
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 md:w-24" />
          <p className="text-xl font-bold text-yellow-500">Food Garden</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-10 px-1 font-semibold">
          <NavItems />
        </div>
      </div>
      <div className="navbar-end">
        <p className="primary-btn">Sign in</p>
      </div>
    </div>
  );
};

export default Navbar;

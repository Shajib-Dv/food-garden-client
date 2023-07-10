/** @format */

import NavItems from "./NavItems";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[rgb(0,0,0,0.5)] md:px-6 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[calc(100vw-20px)] space-y-6 font-semibold"
          >
            <NavItems />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 md:w-24" />
          <p className="text-xl font-bold">Food Garden</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-10 px-1 font-semibold">
          <NavItems />
        </div>
      </div>
      <div className="navbar-end">
        <p className="btn btn-warning">Sign in</p>
      </div>
    </div>
  );
};

export default Navbar;

/** @format */

import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-yellow-500 px-3 rounded-md" : ""
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;

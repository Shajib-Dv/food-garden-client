/** @format */

import ActiveLink from "../../components/ActiveLink";

const NavItems = () => {
  return (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/foods">Foods</ActiveLink>
      <ActiveLink to="/orders">Orders</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
    </>
  );
};

export default NavItems;

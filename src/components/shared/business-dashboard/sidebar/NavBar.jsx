import React from "react";
import NavItem from "./NavItem";

const NavBar = ({ navItems = [] }) => {
  return (
    <ul>
      {navItems.map((item, id) => {
        return <NavItem key={id} {...item} />;
      })}
    </ul>
  );
};

export default NavBar;

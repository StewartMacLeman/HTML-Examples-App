import React from "react";
import { NavLink } from "react-router-dom";

const NavNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Navigation</li>
      <li onClick={getTitles}>
        <NavLink to="nav/vertical-nav" className={active}>Vertical Nav</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="nav/horizontal-nav" className={active}>Horizontal Nav</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="nav/flexbox-ex1" className={active}>Flexbox Ex 1.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="nav/flexbox-ex2" className={active}>Flexbox Ex 2.</NavLink>
      </li>
    </ul>
  );
};

export default NavNav;

import React from "react";
import { NavLink } from "react-router-dom";

const ImagesNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Images</li>
      <li onClick={getTitles}>
        <NavLink to="images/src-attrb" className={active}>src Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="images/bgImage-property" className={active}>background-image Property.</NavLink>
      </li>
    </ul>
  );
};

export default ImagesNav;

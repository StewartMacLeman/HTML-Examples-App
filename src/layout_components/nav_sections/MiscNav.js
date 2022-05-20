import React from "react";
import { NavLink } from "react-router-dom";

const MiscNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Misc.</li>
      <li onClick={getTitles}>
        <NavLink to="misc/del-tag" className={active}>The del tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/mark-tag" className={active}>The mark tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/q-tag" className={active}>The q tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/blockquote-tag" className={active}>blockquote tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/cite-tag" className={active}>cite tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/bdo-tag" className={active}>Bi-Directional Override tag</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="misc/abbr-tag" className={active}>The abbr tag</NavLink>
      </li>
    </ul>
  );
};

export default MiscNav;

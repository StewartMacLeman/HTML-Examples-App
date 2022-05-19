import React from "react";
import { NavLink } from "react-router-dom";

const ListsNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Lists</li>
      <li onClick={getTitles}>
        <NavLink to="lists/unordered-list" className={active}>Unordered List</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/list-style-type-attrb" className={active}>list-style-type Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/list-style-type-prop" className={active}>list-style-type Property</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/nested-list" className={active}>Nested List</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/ordered-list" className={active}>Ordered List</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/type-attrb" className={active}>type Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="lists/description-list" className={active}>Description List</NavLink>
      </li>
    </ul>
  );
};

export default ListsNav;

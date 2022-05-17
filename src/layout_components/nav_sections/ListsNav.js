import React from "react";
import { Link } from "react-router-dom";

const ListsNav = ({ getTitles }) => {
  return (
    <ul>
      <li className="topic subtitle">Lists</li>
      <li onClick={getTitles}>
        <Link to="lists">Unordered List</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/list-style-type-attrb">list-style-type Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/list-style-type-prop">list-style-type Property</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/nested-list">Nested List</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/ordered-list">Ordered List</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/type-attrb">Type Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/description-list">Description List</Link>
      </li>
    </ul>
  );
};

export default ListsNav;

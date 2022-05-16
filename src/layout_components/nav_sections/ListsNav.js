import React from "react";
import { Link } from "react-router-dom";

const ListsNav = ({ getTitles }) => {
  return (
    <ul>
      <li className="topic subtitle">Lists</li>
      <li onClick={getTitles}>
        <Link to="lists">Example 1</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/ex_2">Example 2</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="lists/ex_3">Example 3</Link>
      </li>
    </ul>
  );
};

export default ListsNav;

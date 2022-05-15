import React from "react";
import { Link } from "react-router-dom";

const Nav = ({getTitles, clearH2}) => {
  return (
    <aside className="navAside">
      <nav className="nav">
        <ul>
          <li className="topic subtitle" onClick={clearH2}>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li className="topic subtitle">Tables</li>
          <li onClick={getTitles}>
            <Link to="tables">Missing th tags</Link>
          </li>
          <li onClick={getTitles}>
            <Link to="tables/ex_2">Example 2</Link>
          </li>
          <li onClick={getTitles}>
            <Link to="tables/ex_3">Example 3</Link>
          </li>
        </ul>
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
      </nav>
    </aside>
  );
};

export default Nav;

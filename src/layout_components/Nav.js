import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
      <ul>
        <li>Tables</li>
        <li><Link to="tables">Example 1</Link></li>
        <li><Link to="tables/ex_2">Example 2</Link></li>
        <li><Link to="tables/ex_3">Example 3</Link></li>
      </ul>
      <ul>
        <li>Lists</li>
        <li><Link to="lists">Example 1</Link></li>
        <li><Link to="lists/ex_2">Example 2</Link></li>
        <li><Link to="lists/ex_3">Example 3</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
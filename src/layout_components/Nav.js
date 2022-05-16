import React from "react";
import { Link } from "react-router-dom";
import TablesNav from "./nav_sections/TablesNav";
import ListsNav from "./nav_sections/ListsNav";

const Nav = ({ getTitles, clearH2 }) => {
  return (
    <aside className="navAside">
      <nav className="nav">
        <ul>
          <li className="topic subtitle" onClick={clearH2}>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <TablesNav getTitles={getTitles} />
        <ListsNav getTitles={getTitles} />
      </nav>
    </aside>
  );
};

export default Nav;

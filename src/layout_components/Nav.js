import React from "react";
import { Link } from "react-router-dom";
import TablesNav from "./nav_sections/TablesNav";
import ListsNav from "./nav_sections/ListsNav";
import FormsNav from "./nav_sections/FormsNav";

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
        <FormsNav getTitles={getTitles} />
      </nav>
    </aside>
  );
};

export default Nav;

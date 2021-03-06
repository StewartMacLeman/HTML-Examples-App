import React from "react";
import { NavLink } from "react-router-dom";
import TablesNav from "./nav_sections/TablesNav";
import ListsNav from "./nav_sections/ListsNav";
import FormsNav from "./nav_sections/FormsNav";
import ImagesNav from "./nav_sections/ImagesNav";
import NavNav from "./nav_sections/NavNav";
import MiscNav from "./nav_sections/MiscNav";

const Nav = ({ getTitles, clearH2 }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <aside className="navAside">
      <nav className="nav">
        <ul>
          <li className="topic subtitle" onClick={clearH2}>
            <NavLink to="/" className={active}>Home</NavLink>
          </li>
        </ul>
        <TablesNav getTitles={getTitles} />
        <ListsNav getTitles={getTitles} />
        <FormsNav getTitles={getTitles} />
        <ImagesNav getTitles={getTitles} />
        <NavNav getTitles={getTitles} />
        <MiscNav getTitles={getTitles} />
      </nav>
    </aside>
  );
};

export default Nav;

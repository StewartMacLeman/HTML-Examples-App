import React from "react";
import {NavLink} from "react-router-dom"

const TablesNav = ({getTitles}) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Tables</li>
      <li onClick={getTitles}>
        <NavLink to="tables/missing_th_tags" className={active}>Missing th tags</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/with_th_tags" className={active}>With th tags</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/cell_borders" className={active}>Cell Borders</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/border_collapse" className={active}>Border Collapse</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/colspan" className={active}>Using Colspan</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/rowspan" className={active}>Using Rowspan</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/colgroup" className={active}>Using Colgroup</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/caption" className={active}>Using a Caption</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="tables/semantics" className={active}>Semantic Sections</NavLink>
      </li>
    </ul>
  );
};

export default TablesNav;

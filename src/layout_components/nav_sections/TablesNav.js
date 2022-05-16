import React from "react";
import {Link} from "react-router-dom"

const TablesNav = ({getTitles}) => {
  return (
    <ul>
      <li className="topic subtitle">Tables</li>
      <li onClick={getTitles}>
        <Link to="tables">Missing th tags</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/with_th_tags">With th tags</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/cell_borders">Cell Borders</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/border_collapse">Border Collapse</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/colspan">Using Colspan</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/rowspan">Using Rowspan</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/colgroup">Using Colgroup</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/caption">Using a Caption</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="tables/semantics">Semantic Sections</Link>
      </li>
    </ul>
  );
};

export default TablesNav;

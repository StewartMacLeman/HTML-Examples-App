import React from "react";
import { Link } from "react-router-dom";

const MiscNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Misc.</li>
      <li onClick={getTitles}>
        <Link to="misc/del-tag" className={active}>The del tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/mark-tag" className={active}>The mark tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/q-tag" className={active}>The q tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/blockquote-tag" className={active}>blockquote tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/cite-tag" className={active}>cite tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/bdo-tag" className={active}>Bi-Directional Override tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/abbr-tag" className={active}>The abbr tag</Link>
      </li>
    </ul>
  );
};

export default MiscNav;

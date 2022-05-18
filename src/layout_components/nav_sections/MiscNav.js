import React from "react";
import { Link } from "react-router-dom";

const MiscNav = ({ getTitles }) => {
  return (
    <ul>
      <li className="topic subtitle">Misc.</li>
      <li onClick={getTitles}>
        <Link to="misc">The del tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/mark-tag">The mark tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/q-tag">The q tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/blockquote-tag">blockquote tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/cite-tag">cite tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/bdo-tag">Bi-Directional Override tag</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="misc/abbr-tag">The abbr tag</Link>
      </li>
    </ul>
  );
};

export default MiscNav;

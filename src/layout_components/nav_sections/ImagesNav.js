import React from "react";
import { Link } from "react-router-dom";

const ImagesNav = ({ getTitles }) => {
  return (
    <ul>
      <li className="topic subtitle">Images</li>
      <li onClick={getTitles}>
        <Link to="images">src Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="images/bgImage-property">background-image Property.</Link>
      </li>
    </ul>
  );
};

export default ImagesNav;

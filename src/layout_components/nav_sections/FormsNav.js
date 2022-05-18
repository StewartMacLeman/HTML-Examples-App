import React from "react";
import { Link } from "react-router-dom";

const FormsNav = ({ getTitles }) => {
  return (
    <ul>
      <li className="topic subtitle">Forms</li>
      <li onClick={getTitles}>
        <Link to="forms">Input type="text"</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/autofocus-attrb">autofocus Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/value-attrb">value Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/placeholder-attrb">placeholder Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/autocomplete-attrb">autocomplete Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/disabled-attrb">disabled Attrb.</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/input-hidden">Input type="hidden"</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/input-radio">Input type="radio"</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/input-checkbox">Input type="checkbox"</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/textarea">Textarea</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/select-option">Select &amp; Option</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/input-datalist">Input &amp; Datalist</Link>
      </li>
      <li onClick={getTitles}>
        <Link to="forms/fieldset-legend">Fieldset &amp; Legend</Link>
      </li>
    </ul>
  );
};

export default FormsNav;

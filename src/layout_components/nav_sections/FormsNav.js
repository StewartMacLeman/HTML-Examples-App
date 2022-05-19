import React from "react";
import { NavLink } from "react-router-dom";

const FormsNav = ({ getTitles }) => {
  const active = ({ isActive }) => isActive ? "active" : "";
  return (
    <ul>
      <li className="topic subtitle">Forms</li>
      <li onClick={getTitles}>
        <NavLink to="forms/input-text" className={active}>Input type="text"</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/autofocus-attrb" className={active}>autofocus Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/value-attrb" className={active}>value Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/placeholder-attrb" className={active}>placeholder Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/autocomplete-attrb" className={active}>autocomplete Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/disabled-attrb" className={active}>disabled Attrb.</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/input-hidden" className={active}>Input type="hidden"</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/input-radio" className={active}>Input type="radio"</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/input-checkbox" className={active}>Input type="checkbox"</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/textarea" className={active}>Textarea</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/select-option" className={active}>Select &amp; Option</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/input-datalist" className={active}>Input &amp; Datalist</NavLink>
      </li>
      <li onClick={getTitles}>
        <NavLink to="forms/fieldset-legend" className={active}>Fieldset &amp; Legend</NavLink>
      </li>
    </ul>
  );
};

export default FormsNav;

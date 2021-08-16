import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
// import { Redirect, useHistory, useLocation } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/student-register">student-register</NavLink>
      </li>
      <li>
        <NavLink to="/alumini-register"> alumini-register</NavLink>
      </li>

      <li>
        <NavLink to="/student-login"> student-login</NavLink>
      </li>

      <li>
        <NavLink to="/alumini-login"> alumini-login</NavLink>
      </li>

      <li>
        <NavLink to="/book"> bookTimeslot</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;

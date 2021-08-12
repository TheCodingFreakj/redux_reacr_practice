import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
// import { Redirect, useHistory, useLocation } from "react-router-dom";

const Navlinks = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/register">register</NavLink>
      </li>
      <li>
        <NavLink to="/login"> Login</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;

import React from "react";
import { NavLink } from "react-router-dom";
import "./mainnav.css";
const Navigation = () => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/objectVariable" exact>
          ObjectVariable
        </NavLink>
      </li>

      <li>
        <NavLink to="/styledcomponents2" exact>
          StyledComponents
        </NavLink>
      </li>

      <li>
        <NavLink to="/cssmodule" exact>
          Css module
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;

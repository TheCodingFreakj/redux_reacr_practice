import React from "react";
import "./style.css";

const SideDrawer = (props) => {
  return (
    <aside className="sidedrawer">
      <button
        className="main-nav-menu-button-close"
        onClick={props.closemenu}
      >x</button>
      {props.children}
    </aside>
  );
};

export default SideDrawer;

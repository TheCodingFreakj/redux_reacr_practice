import React from "react";
import Wrapper from "../../hoc/wrapper";
import classes from "./layout.css";

const layout = (props) => (
  <Wrapper>
    <div className={classes.header}>ToolBar ,SideDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Wrapper>
);

export default layout;

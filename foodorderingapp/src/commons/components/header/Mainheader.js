import React from "react";
import "./mainheader.css";

const MainHeader = (props) => {
  return (
    <>
      <header className="main_header">{props.children}</header>
    </>
  );
};

export default MainHeader;

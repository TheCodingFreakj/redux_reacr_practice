import React from "react";
import MainHeader from "../header/Mainheader";
import Navlinks from "../Navigations/navlinks";
import "./mainNavigation.css";

const MainNavigation = () => {
  return (
    <>
      <MainHeader>
        <nav role="main-nav-btn-menu">
          <div id="menuToggle">
            {/* <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    --> */}
            <input type="checkbox" />

            {/* <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    --> */}
            <span></span>
            <span></span>
            <span></span>

            {/* <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    --> */}

            <Navlinks />
          </div>

          <h1 className="nav-title">Pizza Orders</h1>
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;

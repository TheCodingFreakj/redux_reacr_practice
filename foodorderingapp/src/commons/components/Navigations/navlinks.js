import React from "react";
import { Link } from "react-router-dom";
import "./navlinks.css";

const Navlinks = () => {
  return (
    <>
      <ul id="menu">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Sign In</Link>
        <Link to="/user">My Profile</Link>
        <Link to="/products">Products</Link>
        <Link to="/userid/myorders">My Orders</Link>
      </ul>
    </>
  );
};

export default Navlinks;

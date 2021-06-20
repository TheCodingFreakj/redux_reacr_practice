import React from "react";

const OuterDiv = {
  background: "black",
  padding: "2%",
  display: "flex",
};
const innerDiv = {
  background: "red",
  width: "19rem",
  margin: "6%",
  padding: "3% 5%",
  borderSizing: "border-box",
  minHeight: "10rem",
  color: "white",
};

const buttonDiv = {
  background: "yellow",
  border: "none",
  color: "black",
  padding: "15px 32px",
  textAlign: "centre",
  textDecoration: "none",
  fontSize: "12px",
  display: "inline-block",
};
const BlogPosts = () => {
  return (
    <>
      <h1>Showing All the Cards</h1>
      <div style={OuterDiv}>
        <div style={innerDiv}>
          <h2>This is header</h2>
          <p>This is content section</p>
          <button style={buttonDiv}>Know More</button>
        </div>
        <div style={innerDiv}>
          <h2>This is header</h2>
          <p>This is content section</p>
          <button style={buttonDiv}>Know More</button>
        </div>
        <div style={innerDiv}>
          <h2>This is header</h2>
          <p>This is content section</p>
          <button style={buttonDiv}>Know More</button>
        </div>
      </div>
    </>
  );
};

export default BlogPosts;

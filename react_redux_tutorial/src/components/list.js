import React from "react";
import { connect } from "react-redux"; //connect the store to this components
//fetch the articles and use them as props
const ConnectedList = ({ fooditems }) => (
  <ul>
    {fooditems.map((el) => (
      <li key={el.id}>{el.title}</li>
    ))}
  </ul>
);
const mapStateToProps = (state) => {
  return { fooditems: state.fooditems };
};
export default connect(mapStateToProps)(ConnectedList);

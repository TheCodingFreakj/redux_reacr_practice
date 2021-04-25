import React from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";
const ConnectedForm = (props) => {
  const [title, settitle] = React.useState("");
  const onChange = (e) => {
    // // Extract the current value of the customer from state
    // let titlefromstate = title;
    // let updatedtitle = { ...titlefromstate };
    // // Extract the value of the input element represented by `target`
    // const titlefromuserip = e.target.value;
    // // Update the customer object's first name
    // //hjere we are updating the state tot;e
    // updatedtitle = titlefromuserip;
    // settitle({ title: updatedtitle });
    settitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addfooditem({ title });
    settitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title} // grab the init value from formData
          onChange={onChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addfooditem: (fooditems) => dispatch(addArticle(fooditems)),
  };
};
export default connect(null, mapDispatchToProps)(ConnectedForm);
//https://react-redux.js.org/using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object

import React from "react";

const PizzaBuilder = (props) => {
  console.log(props.selectToppings);
  const burgerbuilderCover = {
    margin: "40px",
    border: "5px solid red",
    fontSize: "20px",
  };
  const burgerbuilder = {
    margin: "40px",
    border: "5px solid green",
    textAlign: "center",
  };

  return (
    <React.Fragment>
      <div style={burgerbuilderCover}>
        <div style={burgerbuilder}>The name: {props.name}</div>
        <div style={burgerbuilder}>Phone: {props.phone} </div>
        <div style={burgerbuilder}>
          Toppings: <br />
          <select
            name="chickenToppings"
            id="chickenToppings-select"
            // onChange={props.selectToppings}
          >
            <option value="">--Do you want chickenToppings--</option>
            <option value="chickenToppings">Yes</option>
            <option value="chickenToppings">No</option>
          </select>
          {props.chickenToppings ? (
            <div style={burgerbuilder}>Chicken Toppings Selected</div>
          ) : (
            <div style={burgerbuilderCover}>None Selected</div>
          )}
        </div>
        <div style={burgerbuilder}>Crust Layerings: {props.crust}</div>
        <div style={burgerbuilder}>Price:{props.amount} </div>
      </div>
    </React.Fragment>
  );
};

export default PizzaBuilder;

//Three major ways of stlyings
//Including CSS Stylesheet using import
//Inline Stling using style={divStyle} where divString is a style object
// const divStyle = {
//     margin: '40px',
//     border: '5px solid pink'
//   };
//Using Css Modules

//Outputting content dynamically
//YOu can use any function or variable assignemnt to output content dynamically from the components
// ////////////////////////////////////Example 1:///////////////////////////////////
// let today = new Date(); This is the time {today.getDate()} you buy a pizza
//////////////////////////////////////Example 2:///////////////////////////////////////////////////////////
//use function inside JSX expression
//Deciding the output based on choices
// const thickToppings = false,
// thinToppings = true;
// let quantity = 4;

// const decideToppings = () => {
//   return thickToppings ? 20 : 10;
// };

// const decideQuantity = () => {
//   return quantity * decideToppings();
// };
//return <React.Fragment>{decideQuantity()}</React.Fragment>;

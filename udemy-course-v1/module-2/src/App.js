import React from "react";
import "./App.css";
import Form from "../src/components/forms";
const App = () => {
  const [showPizza, setshowPizza] = React.useState(true);
  const [showBurger, setshowBurger] = React.useState(true);
  const [order, setorder] = React.useState({
    orderDetails: [
      {
        name: "Pais Lee",
        orders: "6",
        address: "kjjj",
      },

      {
        name: "Ronalo Leien",
        orders: "8",
        address: "kjjjhkjhkj",
      },
    ],
  });

  const { orderDetails } = order;
  console.log(order);

  React.useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("rendering resources for showPizza!");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log("unmounting for showPizza...");
  }, [showPizza]);

  React.useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    console.log("rendering resources for showBurger");

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log("unmounting2 for showBurger...");
  }, [showBurger]);

  return (
    <div className="container">
      <div className="inner-flex-item">
        <button onClick={() => setshowPizza(!showPizza)}>Show Pizzas</button>

        {showPizza ? (
          <div className="inner-container">{`Show Pizza Here ${showPizza}`}</div>
        ) : (
          <div>
            <Form
              name={orderDetails[0].name}
              orders={orderDetails[0].orders}
              address={orderDetails[0].address}
            />
          </div>
        )}

        {JSON.stringify(showPizza)}
      </div>

      <div className="inner-flex-item">
        <button onClick={() => setshowBurger(!showBurger)}>Show Burgers</button>
        {showBurger ? (
          <div className="inner-container">
            {`Show Burger Here ${showBurger}`}
          </div>
        ) : (
          <div>
            <Form
              name={orderDetails[1].name}
              orders={orderDetails[1].orders}
              address={orderDetails[1].address}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
//add an onClick that toggles between showing pizzas and orders
//we store the value of whether to store or not in state
//then we will set state based on the click event to true or false that shows pizzas or burger or the order form

//https://daveceddia.com/useeffect-hook-examples/
// Prevent useEffect From Running Every Render
// useEffect Does Not Actively “Watch”
// Only Run Once, on Mount
// How To Fix The Warnings (Don’t Ignore The Warnings!)
// When Does useEffect Run?
// Run useEffect on State Change
// Run useEffect When a Prop Changes
// Focus On Mount
// Fetch Data With useEffect
// Re-fetch When Data Changes

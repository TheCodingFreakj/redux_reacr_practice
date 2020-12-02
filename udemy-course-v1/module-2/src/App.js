import React from "react";
import "./App.css";
import Form from "../src/components/forms";
import OrderList from "../src/hoc/order";
import ShowPizzaOrder from "../src/orders/pizzaorder";
import ShowBurgerOrder from "../src/orders/burgerorders";
import axios from "axios";

const App = () => {
  const [showPizza, setshowPizza] = React.useState(false);
  const [showBurger, setshowBurger] = React.useState(false);

  const [order, setorder] = React.useState({
    burgers: "",
    pizzas: "",
  });
  const { burgers, pizzas } = order;

  console.log(order);
  React.useEffect(() => {
    console.log("rendering resources for burgerOrders");

    const fetchburgers = async () => {
      await axios
        .get("http://localhost:3001/burgerOrders")
        .then((resp) => {
          console.log("the data from fetchburgers function call", resp.data);
          setorder((prevState) => {
            return { ...prevState, burgers: resp.data };
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchburgers();

    return () => console.log("unmounting2 for burgerOrders...");
  }, []); //rerenders everytime setorder state changes

  console.log(
    "This runs after the fist useEffect, that fetches burgers",
    order
  );
  React.useEffect(() => {
    console.log("rendering resources for pizzaOrders");
    const fetchPizzas = async () => {
      await axios
        .get("http://localhost:3001/pizzaOrders")
        .then((resp) => {
          console.log("the data from fetchPizzas function call", resp.data);
          //in This set state I need the burger values as well
          setorder((prevState) => {
            console.log("pizza prevState", prevState);
            return { ...prevState, pizzas: resp.data };
          });

          //setorder({ ...order, ...burgers, pizzas: resp.data }); //This is array of data
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchPizzas();

    return () => console.log("unmounting3 for pizzaOrders...");
  }, []); //rerenders everytime setorder state changes
  console.log(
    "This runs after the second useEffect, that fetches pizzas",
    order
  );
  return (
    <div className="container">
      {console.log("This is for render 1")}

      <div className="inner-flex-item">
        {console.log("This is for render 2")}
        <button onClick={() => setshowBurger(!showBurger)}>
          Burger Orders
        </button>
        {showBurger ? (
          <div className="inner-container">
            <Form orderType="burger" />
          </div>
        ) : (
          <div>
            {console.log("This is for render 3")}
            {console.log("fetched burgers", burgers)}

            <OrderList>
              <ShowBurgerOrder burgers={burgers} />
            </OrderList>
          </div>
        )}
      </div>

      <div className="inner-flex-item">
        {console.log("This is for render 4")}
        <button onClick={() => setshowPizza(!showPizza)}>Pizzas Orders</button>
        {showPizza ? (
          <div className="inner-container">
            <Form
              orderType="pizza"
              showPizza={showPizza}
              showBurger={showBurger}
            />
          </div>
        ) : (
          <div>
            {console.log("This is for render 5")}
            {console.log("fetched pizzas", pizzas)}

            <OrderList>
              <ShowPizzaOrder pizzas={pizzas} />{" "}
            </OrderList>
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
//////////////////VV IMP/////////////////////////////////////////
//https://www.robinwieruch.de/react-hooks-fetch-data
//https://reactjs.org/docs/hooks-faq.html#can-i-skip-an-effect-on-updates
//https://reactjs.org/docs/hooks-reference.html#functional-updates
//npx json-server --watch db.json --port 3001
///////////////////////////Concepts Discussed ////////////////////////////////

//how useEffect run
//Understanding how to adjust sideeffects in useEffects on user action like click button
//running useEffect once
//running useEffect based on dependency
//Data fetching in Useffect
//Running two useEffcets and analyziing how data flows
//Rendering components conditionally
//Analyziing how data flows through useEffects when compinents are passed

//git log --graph --pretty=oneline --abbrev-commit
//git push -u origin main

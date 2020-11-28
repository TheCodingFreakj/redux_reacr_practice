import React, { useState } from "react";
import "./App.css";

// const pizzalists = [
//   {
//     name: "Chicago Pizza",
//     toppings: ["groundbeef", "sausage", "pepperoni", "mushrooms"],
//     desc:
//       "This pizza have a thick crust and raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella with meat, vegetables.",
//   },
//   {
//     name: "New York-Style Pizza",
//     toppings: ["mozzarella cheese", "tomato sauce", "pepperoni"],
//     desc:
//       "Its unique flavor has to do with the minerals present in New York’s tap water supply.",
//   },
//   {
//     name: "St. Louis Pizza",
//     toppings: ["Provel cheese", "oregano", "sweettomato"],
//     desc:
//       "Due to the crispy crust, St. Louis pizza is usually cut into three- or four-inch rectangles, known as party or tavern cut.",
//   },
//   {
//     name: "Neapolitan Pizza",
//     toppings: ["tomatoes", "mozzarella", "pepperoni", "mushrooms"],
//     desc:
//       "Neapolitan pizza is thin, it isn't designed to handle the weight of too many toppings.",
//   },
//   {
//     name: "Sicilian Pizza",
//     toppings: ["groundbeef", "mozzarella", "basil", "virginoil"],
//     desc:
//       "This square-cut pizza is served with or without cheese, and often with the cheese underneath the sauce to prevent the pie from becoming soggy.",
//   },
//   {
//     name: "Greek Pizza",
//     toppings: ["tomato", "sausage", "oregano"],
//     desc:
//       "Greek-style pizza, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. ",
//   },
// ];
import PizzaBuilder from "../src/components/pizzabuilder";
const App = () => {
  const initialState = {
    name: "Soma ",
    phone: "7751089445",
    chickenToppings: false,
    crust: "thin",
    amount: "250",
  };

  const [pizzaChoices, setpizzaChoices] = useState(initialState);
  const [showPizza, setshowPizza] = useState(true); //state that determines if to show or not

  //destructure the vles

  const { name, phone, chickenToppings, crust, amount } = pizzaChoices;

  const handlePizzaToggle = () => {
    setshowPizza(!showPizza);
  };

  const selectToppings = (e) => {
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <button className="btn-toggle" onClick={handlePizzaToggle}>
        Toggle Here
      </button>

      {showPizza ? (
        <PizzaBuilder
          name={name}
          phone={phone}
          chickenToppings={chickenToppings}
          crust={crust}
          amount={amount}
          selectToppings={(e) => selectToppings(e)}
        />
      ) : (
        <div> There are no orders Order Now</div>
      )}
    </React.Fragment>
  );
};

export default App;

//step1: Creating Own Component
//Outputting content dynamically
//React Hooks
//Handling Events with Methods for Outputting Content dynamically'

//Manipulating the state dynamically with event triggers namechanggehandler
//Passing methods as reference as props and how to use it in child comp
//how to pass method reference in child comp and use it in parent
//passing props to child and passing back to parent

//Rendering content dynamically (use a switch to show the content
//what happens when react rrnder the functional comp)
//handle content dynamically the javasrcipt way with variable assigment with jsx code map the state

//outputting arrays of data in lists...... interact with them...updating them...
//manipulate the array with clicklistener delete pizza from array
// flawed way:store the state in a var..call splice to  remove and set state
//mutated original data if working with state

//updating state immuatbly
//copy the aa\rray conts person = state.slice() then splice the copied array
//alt: const person = [...state]

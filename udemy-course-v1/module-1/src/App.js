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
import Customer from "../src/components/customer";
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
  const [customer, setcustomer] = useState({
    customers: [
      {
        id: "7751089445",
        name: "Soma ",
        phone: "7751089445",
        address: "California ",
        orders: "3",
      },

      {
        id: "7751089443",
        name: "Pallavi ",
        phone: "7751089443",
        address: "New York",
        orders: "9",
      },

      {
        id: "7751079443",
        name: "Riyal ",
        phone: "7751079443",
        address: "Las Vegas",
        orders: "6",
      },
    ],
  });

  //destructure the vles

  const { name, phone, chickenToppings, crust, amount } = pizzaChoices;
  const { customers } = customer;

  const handlePizzaToggle = () => {
    setshowPizza(!showPizza);
  };

  const selectToppings = (e) => {
    console.log(e.target.value);
    setpizzaChoices({
      name: "Soma ",
      phone: "7751089445",
      chickenToppings: e.target.value,
      crust: "thin",
      amount: "250",
    });
  };

  const addressChangeHandler = (e, personIndex) => {
    //we will update the state but on for the customer whoes inhput field we type

    //find the person index
    //iterating over the customer state array and matching with user input
    const customerIndex = customers.findIndex((c) => {
      return c.id === personIndex;
    });

    //acees the customer using customerIndex
    //const customer = customers[customerIndex]

    //getting the person using theindex
    //change the js object immutatively
    //Javscript objects ae reference type ..should not mutate them directly
    //create a new javascript object jus like in the state
    //use the spread operator this is keep all the propser of objects we fetche
    //basically we are getting the customer we want to change and we want to
    //preserve all other props
    const customer = {
      ...customers[customerIndex],
    };

    //const customer = Object.assign({}, customers[customerIndex])

    //change the field or update the person over js copy
    customer.address = e.target.value;

    //making the copy of the state
    //get the entire customer array and copy it
    const updatedCustomers = [...customers];

    //update the copied state with the changed js object
    updatedCustomers[customerIndex] = customer;

    //assiging the copied state to the real state
    setcustomer({
      customers: updatedCustomers,
    });

    // setcustomer({
    //   customers: [
    //     {
    //       name: "Soma ",
    //       phone: "7751089445",
    //       address: e.target.value,
    //       orders: "3",
    //     },

    //     {
    //       name: "Pallavi ",
    //       phone: "7751089443",
    //       address: "New York",
    //       orders: "9",
    //     },

    //     {
    //       name: "Riyal ",
    //       phone: "7751079443",
    //       address: "Las Vegas",
    //       orders: "6",
    //     },
    //   ],
    // });
  };

  const deleteCustomerHandler = (personIndex) => {
    console.log(personIndex);
    //updating state immutatbly
    // const customer = customers; // storing the customers state in a constant
    // customer.splice(personIndex, 1); //removing the person
    // setcustomer({ customers: customer });

    //updating state mutably

    //either call slice on the state  const customer = customers.slice();
    //or use spread operator to copy the array and then mutate the copied array
    const customer = [...customers];
    customer.splice(personIndex, 1); //removing the person
    setcustomer({ customers: customer });
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
          selectToppings={selectToppings}
        />
      ) : (
        <div>
          {customers.map((person, i) => {
            return (
              <Customer
                name={person.name}
                phone={person.phone}
                address={person.address}
                orders={person.orders}
                addressChange={(e) => addressChangeHandler(e, person.id)}
                deleteCustomer={() => deleteCustomerHandler(i)}
                key={i}
              />
            );
          })}
          {/* <Customer
            name={customers[0].name}
            phone={customers[0].phone}
            address={customers[0].address}
            orders={customers[0].orders}
            addressChange={addressChangeHandler}
          />
          <Customer
            name={customers[1].name}
            phone={customers[1].phone}
            address={customers[1].address}
            orders={customers[1].orders}
          />
          <Customer
            name={customers[2].name}
            phone={customers[2].phone}
            address={customers[2].address}
            orders={customers[2].orders}
          /> */}
        </div>
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

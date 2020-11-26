import React from "react";
import "./pizzaitem.css";

const PizzaItem = ({ items }) => {
  const showpizzaitems = (items) => {
    return items.map((pizza, i) => {
      const showtoppings = (toppings) => {
        return toppings.map((top, i) => {
          return (
            <div key={i} className="toppings-list">
              <li>{top}</li>
            </div>
          );
        });
      };
      return (
        <div key={i} className="list-card">
          <h1>{pizza.name}</h1>

          <div className="toppings">
            {" "}
            <p> Toppings</p>
            {showtoppings(pizza.toppings)}
          </div>
          <p>{pizza.desc}</p>
          <button className="btn">Add To Cart</button>
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex-container">{showpizzaitems(items)}</div>
    </>
  );
};

export default PizzaItem;
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

//responsivesty;e

import React from "react";
import PizzaItem from "../components/pizzaitem";
import "./pizzarecipelist.css";

const PizzaReceipeLists = ({ pizzalists }) => {
  console.log(pizzalists);
  return (
    <>
      <PizzaItem items={pizzalists} />
    </>
  );
};

export default PizzaReceipeLists;

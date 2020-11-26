import React from "react";
import PizzaReceipeLists from "../components/pizzarecipelist";

const ShowPizzas = () => {
  //fetch data here

  const pizzalists = [
    {
      name: "Chicago Pizza",
      toppings: ["groundbeef", "sausage", "pepperoni", "mushrooms"],
      desc:
        "This pizza have a thick crust and raised edges, similar to a pie, and ingredients in reverse, with slices of mozzarella with meat, vegetables.",
    },
    {
      name: "New York-Style Pizza",
      toppings: ["mozzarella cheese", "tomato sauce", "pepperoni"],
      desc:
        "Its unique flavor has to do with the minerals present in New York’s tap water supply.",
    },
    {
      name: "St. Louis Pizza",
      toppings: ["Provel cheese", "oregano", "sweettomato"],
      desc:
        "Due to the crispy crust, St. Louis pizza is usually cut into three- or four-inch rectangles, known as party or tavern cut.",
    },
    {
      name: "Neapolitan Pizza",
      toppings: ["tomatoes", "mozzarella", "pepperoni", "mushrooms"],
      desc:
        "Neapolitan pizza is thin, it isn't designed to handle the weight of too many toppings.",
    },
    {
      name: "Sicilian Pizza",
      toppings: ["groundbeef", "mozzarella", "basil", "virginoil"],
      desc:
        "This square-cut pizza is served with or without cheese, and often with the cheese underneath the sauce to prevent the pie from becoming soggy.",
    },
    {
      name: "Greek Pizza",
      toppings: ["tomato", "sausage", "oregano"],
      desc:
        "Greek-style pizza, features a thick and chewy crust cooked in shallow, oiled pans, resulting in a nearly deep-fried bottom. ",
    },
  ];

  return (
    <>
      <PizzaReceipeLists pizzalists={pizzalists} />
    </>
  );
};

export default ShowPizzas;

//Chicago Pizza :Traditional Toppings:ground beef, sausage, pepperoni, onion, mushrooms, and green peppers, placed underneath the tomato sauce
//New York-Style Pizza: tomato sauce and mozzarella cheese
//St. Louis Pizza:Provel cheese and a sweeter tomato sauce with a hefty dosage of oregano.
//Neapolitan Pizza:tomatoes, mozzarella from Campania, basil, and extra virgin olive oil.
//Sicilian Pizza:tomato, onion, anchovies, and herbs.
//Greek Pizza:tomato paste with a strong oregano flavor.
//https://www.webstaurantstore.com/article/101/types-of-pizza.html

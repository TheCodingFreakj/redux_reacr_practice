import React from "react";

const ShowPizzaOrder = ({ pizzas }) => {
  console.log("pizzas in showpizza order", pizzas);
  let pizzaorders = null;

  if (pizzas.length !== 0) {
    pizzaorders = pizzas.map((p, i) => (
      <div key={i}>
        <p>
          {p.customer} wants {p.orders} burgers
        </p>
      </div>
    ));
  }

  return (
    <React.Fragment>
      pizzas
      {pizzaorders}
    </React.Fragment>
  );
};

export default ShowPizzaOrder;

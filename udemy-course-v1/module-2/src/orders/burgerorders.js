import React from "react";

const ShowBurgerOrder = ({ burgers }) => {
  console.log("burgers in showburger order", burgers);
  //data reaches here fine after refresh

  //map functin not working
  let burgerorders = null;

  if (burgers.length !== 0) {
    burgerorders = burgers.map((p, i) => (
      <div key={i}>
        <p>
          {p.customer} wants {p.orders} burgers
        </p>
      </div>
    ));
  }

  // console.log(burgerorders);
  //{burgerorders}
  return <React.Fragment>burgers {burgerorders} </React.Fragment>;
};

export default ShowBurgerOrder;

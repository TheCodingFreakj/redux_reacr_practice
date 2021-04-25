// src/js/components/App.js
import React from "react";

const FoodOrderForm = () => {
  const [order, setorder] = React.useState({
    foodName: "",
    foodQuantity: 0,
    foodPrice: 0,
    foodpicked: false,
    errors: {
      foodQuantity: 0,
    },
  });
  const { foodName, foodQuantity, foodPrice, foodpicked, errors } = order;
  const onChange = (e) => {
    ///way1///
    // setorder({
    //   ...order,
    //   [e.target.name]: e.target.value,
    //   foodpicked: true,
    // });

    ///way2///
    setorder((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      foodpicked: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(order);
  //get all the food from db
  const footitems = ["food1", "food2", "food3", "food4"];
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Fooditen</label>

          <select
            value={foodName}
            name="foodName"
            onChange={(e) => onChange(e)}
          >
            <option value="">Select Food Available</option>
            {footitems.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <label>FooditenQuantyity</label>
          <input
            id="input_form"
            type="number"
            name="foodQuantity"
            value={foodQuantity} // grab the init value from formData
            onChange={(e) => onChange(e)}
          />

          <label>FooditenPrice</label>
          <input
            id="input_form"
            type="number"
            name="foodPrice"
            value={foodPrice} // grab the init value from formData
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    </React.Fragment>
  );
};

export default FoodOrderForm;

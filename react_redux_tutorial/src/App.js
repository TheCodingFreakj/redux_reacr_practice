// src/js/components/App.js
import React from "react";
import ConnectedList from "./components/list";
import ConnectedForm from "./components/form";
import FoodOrderForm from "./components/foodorder";

const App = () => (
  <>
    <div className="flex-box">
      <div className="flex-container">
        <h2>ShowFoodItems</h2>
        <ConnectedList />
      </div>

      <div className="flex-container">
        <h2>Add a new FoodItem</h2>
        <ConnectedForm />
      </div>

      <div className="flex-container">
        <h2>Add a new FOOD ORDER FORM</h2>
        <FoodOrderForm />
      </div>
      <div className="flex-container">
        <h2>Show Orders</h2>
        {/* <FoodOrderForm /> */}
      </div>
      <div className="flex-container">
        <h2>Edit Orders</h2>
        {/* <FoodOrderForm /> */}
      </div>

      <div className="flex-container">
        <h2>Delete Orders</h2>
        {/* <FoodOrderForm /> */}
      </div>
    </div>
  </>
);

export default App;
//mapStateToProps onnects a part of the Redux state to the props of a React component
// By doing so a connected React component will have access to the exact part of the store it needs.
//mapDispatchToProps connects Redux actions to React props. This way a connected React component will be able to send messages to the store.

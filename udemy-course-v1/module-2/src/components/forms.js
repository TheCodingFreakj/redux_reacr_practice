import React from "react";
import "./forms.css";
import axios from "axios";

const Form = ({ orderType, showBurger, showPizza }) => {
  const [adjustOrder, setadjustOrder] = React.useState({
    customer: "",
    address: "",
    orders: "",
  });

  // const [captureOrder, setcaptureOrder] = React.useState({});

  const { customer, address, orders } = adjustOrder;
  React.useEffect(() => {
    //This is use Effect runs if any if the props changes
    console.log("rendering resources for Order Form");
    console.log(orderType);

    return () => console.log("unmounting2 for Order Form...");
  }, [orderType]);

  const changeOrder = (e) => {
    setadjustOrder({ ...adjustOrder, [e.target.name]: e.target.value });
  };

  const sendOrder = (e) => {
    e.preventDefault();

    switch (orderType) {
      case "pizza":
        axios
          .post("http://localhost:3001/pizzaOrders", adjustOrder)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;

      case "burger":
        axios
          .post("http://localhost:3001/burgerOrders", adjustOrder)
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((error) => {
            console.log(error);
          });
        break;
      default:
        console.log(`Sorry, we are out of stock`);
    }
  };
  return (
    <React.Fragment>
      <form className="form-container">
        <input
          type="text"
          name="customer"
          value={customer || ""}
          onChange={(e) => changeOrder(e)}
        />
        <input
          type="text"
          name="address"
          value={address || ""}
          onChange={(e) => changeOrder(e)}
        />
        <input
          type="number"
          name="orders"
          value={orders || ""}
          onChange={(e) => changeOrder(e)}
        />
        <button onClick={sendOrder}>Order Now</button>
      </form>
    </React.Fragment>
  );
};

export default Form;

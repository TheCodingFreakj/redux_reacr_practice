import React from "react";
import "./forms.css";

const Form = ({ name, address, orders }) => {
  const [adjustOrder, setadjustOrder] = React.useState({
    name: "",
    address: "",
    orders: "",
  });
  React.useEffect(() => {
    //This is use Effect runs if any if the props changes
    console.log("rendering resources for Order Form");
    console.log(adjustOrder);
    return () => console.log("unmounting2 for Order Form...");
  }, [adjustOrder]);

  const changeOrder = (e) => {
    setadjustOrder({ ...setadjustOrder, [e.target.name]: e.target.value });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    console.log("data sent");
  };
  return (
    <React.Fragment>
      <form className="form-container">
        <input
          type="text"
          name={name}
          defaultValue={name || ""}
          onChange={(e) => changeOrder(e)}
        />
        <input
          type="text"
          name={address}
          defaultValue={address || ""}
          onChange={(e) => changeOrder(e)}
        />
        <input
          type="number"
          name={orders}
          defaultValue={orders || ""}
          onChange={(e) => changeOrder(e)}
        />
        <button onClick={sendOrder}>Order Now</button>
      </form>
    </React.Fragment>
  );
};

export default Form;

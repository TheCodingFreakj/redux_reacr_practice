import React, { useState } from "react";

const Customer = (props) => {
  const customer = {
    width: "400px",
    marginLeft: "250px",
    marginTop: "100px",
    background: "wheat",
    padding: "30px",
    textAlign: "center",
    fontSize: "20px",
  };

  return (
    <React.Fragment>
      <div style={customer}>
        <div onClick={props.deleteCustomer}>x </div>
        <p>
          {props.name} ordered {props.orders} at {props.address}
        </p>
        <p>contact info: {props.phone}</p>
        <input
          type="text"
          onChange={props.addressChange}
          value={props.address}
        />
      </div>
    </React.Fragment>
  );
};

export default Customer;

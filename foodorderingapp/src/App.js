import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import UserLogin from "../src/forms/pages/login";
import UserSignUp from "../src/forms/pages/signup";
import UserProfile from "../src/users/pages/user";
import ShowPizzas from "../src/pizzas/pages/pizzas";
import MyOrders from "../src/pizzas/pages/orders";
import MainNavigation from "./commons/components/Navigations/mainNavigation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainNavigation />
        <Switch>
          <Route path="/signup" component={UserSignUp} />
          <Route path="/login" component={UserLogin} />
          <Route path="/user" component={UserProfile} />
          <Route path="/userid/myorders" component={MyOrders} />
          <Route path="/products" component={ShowPizzas} />
          <Route path="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

//creating the basic routings
//creating the MainLayout
//creating the header
//Creating the footer
//creating the pizza page
//creating the authentication hoc
//creating the sign up and login form
//creating the authenticated user profile page
//creating authenticated indv pizza order forms
//creating the cart
//creating the payment gateway
//creating the authnticated your orders page

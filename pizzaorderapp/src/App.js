import React from "react";
import Layout from "../src/presentComp/Layout/layout";
import PizzaBuilder from "../src/statefulComp/PizzaBuilder/PizzaBuilder";

const App = () => {
  return (
    <>
      <Layout>
        <PizzaBuilder />
      </Layout>
    </>
  );
};

export default App;

//Create the layout

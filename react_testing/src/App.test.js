import React from "react";
import Counter from "./components/Counter";

import { mount, configure, shallow } from "enzyme";

describe("counter testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Counter />);
  });
  test("render the counter header", () => {
    // dont render inside the wrapper
    //with this we can only check what components are inside
    // with this you get the component tree
    expect(wrapper.find("h1").text()).toContain("This is counter app");
    //inside this you will find the element from the dom to see if it render
    //get the elemebt from tag name, class name, id, attribute
    //in this we are extracting the test
    //find the matcher
  });

  test("render a button with  text of increment", () => {
    expect(wrapper.find("#increment-btn").text()).toContain("Increment");
  });

  test("render the initial state value of button rendered on scree", () => {
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  test("render the click event of increment button and increment counter", () => {
    //this mechanism is related to setState over onclikc event
    wrapper.find("#increment-btn").simulate("click");
    //confirm what renders after that
    expect(wrapper.find("#counter-value").text()).toBe("1");
  });

  //first test increment and then decrement
  test("render the click event of decrement-btn button and decrement-btn counter", () => {
    wrapper.find("#increment-btn").simulate("click"); //clicking the button on th \e id
    //confirm what renders after that
    expect(wrapper.find("#counter-value").text()).toBe("1");
    //this mechanism is related to setState over onclikc event
    wrapper.find("#decrement-btn").simulate("click"); //clicking the button on th \e id
    //confirm what renders after that
    expect(wrapper.find("#counter-value").text()).toBe("0");
  });

  //find the button and check if the state is <0, we need to disable it
  //then it remain zero in test
  //write the test and write the code
});

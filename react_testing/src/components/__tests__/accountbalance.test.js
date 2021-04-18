import React from "react";
import Notification from "../Notification";
import AccountBalance from "../AccountBalance";
import { mount, configure, shallow } from "enzyme";

describe(" account balance testing for html and props", () => {
  const propspassed = {
    balance: 1500,
    savingBalance: 1328,
  };

  let accountWrapper;
  beforeEach(() => {
    accountWrapper = shallow(<AccountBalance accounts={propspassed} />);
    // console.log(accountWrapper.debug());
  });

  test("confirming if the inner components are rendering without crash", () => {
    expect(accountWrapper.find(Notification)).toHaveLength(1);
  });
  //https://medium.com/@relasine/testing-component-methods-that-return-jsx-in-react-dc8032e3cf22

  test("test the props on AccountBalance component", () => {
    accountWrapper.find("AccountBalance").forEach((node) => {
      expect(node.prop("balance")).toEqual(propspassed.balance);
      expect(node.prop("savingBalance")).toEqual(propspassed.savingBalance);
    });
  });

  test("test the props on Notification component", () => {
    accountWrapper.find("Notification").forEach((node) => {
      expect(node.prop("balance")).toEqual(1500);
    });
  });

  test("render a button with  text of increment", () => {
    const buttoncontainer = accountWrapper.find("#balance-button");
    expect(buttoncontainer.first().text()).toEqual("Send 100$");
    // expect(buttoncontainer.second().text()).toEqual("Send 200$");
  });
});

// describe("testing the hooks in this component and state changes", () => {
//   test("see if the setstate are going good", () => {
//     const accWrapper = shallow(<accountWrapper />);
//     expect(accWrapper.find(".balance")).toHaveLength(0);
//     expect(accWrapper.find(".savings")).toHaveLength(0);
//     accWrapper.setState({ balance: "1500", savingBalance: "1328" });
//     expect(accWrapper.find(".balance")).toHaveLength(1);
//     expect(accWrapper.find(".savings")).toHaveLength(1);
//   });
// });

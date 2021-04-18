import React, { useState, useEffect } from "react";
import Notification from "../components/Notification";
//{ accounts: { accbalance, savingBalance } }
const AccountBalance = ({ accounts }) => {
  // console.log(accounts);
  const [balance, setBalance] = useState();
  const [savingsBalance, setSavingsBalance] = useState();

  //test this useEffect and check if the state is filled with the props
  useEffect(() => {
    setBalance(accounts.balance);
    setSavingsBalance(accounts.savingBalance);
  }, [accounts.balance, accounts.savingBalance]);

  const handleSavings = () => {
    // 3>test how the state change in usestate and then ui
    //https://dev.to/mgm793/how-to-test-react-hooks-4hed
    //https://dev.to/theactualgivens/testing-react-hook-state-changes-2oga
    if (balance > 1000) {
      setBalance(balance - 100);
      setSavingsBalance(savingsBalance + 100);
    }
  };

  const handleSpending = () => {
    setBalance(balance + 100);
    setSavingsBalance(savingsBalance - 100);
  };

  return (
    <div className="columns">
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your account balance:</h4>
          <div className="balance">{balance}$</div>

          {/* 1>Test the initial value of the button which is initial state
          2>Test when the button is clicked the function is called */}
          <button
            id="balance-button"
            className="button is-info"
            onClick={() => handleSavings()}
          >
            Send 100$
          </button>
        </div>
      </div>
      <div className="column">
        <div className="box">
          <h4 className="title is-4">Your savings balance:</h4>
          <div className="savings">{savingsBalance}$</div>
          <button
            id="balance-button"
            className="button is-info"
            onClick={() => handleSpending()}
          >
            Send 200$
          </button>
        </div>
      </div>
      {/* check the props pass in the child components
      https://stackoverflow.com/questions/40399026/checking-props-of-a-child-component-with-shallow-rendering-using-enzyme/40418956 */}
      <Notification balance={accounts.balance} />
    </div>
  );
};

export default AccountBalance;
//https://ghostinspector.com/blog/css-selector-strategies-automated-browser-testing/

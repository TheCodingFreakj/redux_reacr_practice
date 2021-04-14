import "./App.css";
import Counter from "../src/components/Counter";
import AccountBalance from "../src/components/AccountBalance";
//https://github.com/leighhalliday/easy-mobx-redux-comparison/tree/mocking-axios-start
//https://github.com/leighhalliday/easy-mobx-redux-comparison/tree/mocking-axios-finished/src
const App = () => {
  const accounts = {
    balance: 1500,
    savingBalance: 1328,
  };
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <h1 className="has-text-centered title is-1">
          Welcome in the personal finance app!
        </h1>
        <AccountBalance accounts={accounts} />
      </header>
    </div>
  );
};

export default App;

//test this https://github.com/Duomly/reactjs-hooks-tutorial


//initiaze the store
import { createStore } from "redux";
import rootReducer from "../reducers/index";
//store is the result of function of createStore that takes rootReducer as first argument
// You may also pass an initial state to createStore, useful for server side rendering and state preloading
const store = createStore(rootReducer);
// the state in Redux comes from reducers.
//reduce create the states in your app

//dispatches an action
//store is entry point to the redux framework
//store forwards the action objec to the rootreducer
//rootreducer will  look at the type property of this action object
//depending on the action type, the reducer produces the next state
//merging the action payload into the new state.
export default store;

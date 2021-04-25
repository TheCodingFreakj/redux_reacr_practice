// Redux reducer is just a JavaScript function.
// It takes two parameters: the current state and action
//create the state initial
import { ADD_FOODITEM } from "../constants/action-types";
const initialState = {
  fooditems: [],
};
//When an action is dispatched, the store forwards a message (the action object) to the reducer.
function rootReducer(state = initialState, action) {
  if (action.type === ADD_FOODITEM) {
    return Object.assign({}, state, {
      fooditems: state.fooditems.concat(action.payload),
    });
  }
  return state;
}
// how to let the reducer know when to generate the next state?
//the only way to change the state is by sending a signal to the store.
// This signal is an action.
//you "dispatching an action" and connected reducer activates
export default rootReducer;

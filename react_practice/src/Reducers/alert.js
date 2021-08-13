import { SET_ALERT, REMOVE_ALERT } from "../Actions/type";

const initialState = [];

//action has a type to evaluate and data based on the state structure
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    //depending on the type of action we send data
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      //remove the alert by id from the state
      return state.filter((alert) => alert.id !== payload);

    default:
      return state;
  }
}

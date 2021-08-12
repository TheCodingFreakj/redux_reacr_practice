import uuid from "uuid";

import { SET_ALERT, REMOVE_ALERT } from "./type";


export const setAlert = (msg, AlertType) => (dispatch) => {
  //generate the id randomly

  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, AlertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), 5000);
};

// //the compoenetnt willl interact with this
// //we will call this action from the component
// //then this action from here taking all the info will get dispatched to the reducer file
// //then the reducer with return the payload to the compoenent

//you call these action from the component
//when you visit the page on the front end you will the default state set by the reducer
//where this action is declared
//now when you take that action you will see the state changing and object you want to send
//after the action you get the payload

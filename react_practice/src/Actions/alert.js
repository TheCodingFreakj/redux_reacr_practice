

import { SET_ALERT, REMOVE_ALERT } from "./type";

export const setAlert = (msg) => (dispatch) => {
  //generate the id randomly
  dispatch({
    type: SET_ALERT,
    payload: msg
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
};



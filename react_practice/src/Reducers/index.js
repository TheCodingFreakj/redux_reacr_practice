import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import freebooking from "./freebooking";

export default combineReducers({
  //these are the reducers
  alert,
  auth,
  freebooking,
});

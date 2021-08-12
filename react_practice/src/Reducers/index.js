import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";


export default combineReducers({
  //these are the reducers
  alert,
  auth,
});

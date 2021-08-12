import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    DELETE_ACCOUNT,
  } from "../Actions/type";
  
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null, // we depend on this for decide if people can see protected routes
    loading: true, //once we get data this will be false and we see the payload
    user: null, //payload or res data for /api/auth give back the authenticated user
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
  
      //depending on the type of action we send data
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        //put the token that /api/auth gives
        localStorage.setItem("token", payload.token);
  
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
  
      case AUTH_ERROR:
      case REGISTER_FAIL:
      case LOGIN_FAIL:
      case LOGOUT:
      case DELETE_ACCOUNT:
        localStorage.removeItem("token");
  
        return {
          ...state,
          ...payload,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
  
      default:
        return state;
    }
  }
  
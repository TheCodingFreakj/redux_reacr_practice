import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_ALERT,
  LOGOUT,
} from "../Actions/type";

import { setAlert } from "./alert";
import axios from "axios";

//Load the User

export const loadUser = () => async (dispatch) => {
  // if (localStorage.token) {
  //   setAuthToken(localStorage.token);
  // }

  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:9000/api/auth",
    });
    dispatch({
      type: USER_LOADED,
      payload: response.data, //user is send to this action type
    });
    console.log(response);

    localStorage.setItem("user", response.data);
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

//Register User

export const registerUser =
  ({ name, email, password, role }) =>
  async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/users",
        data: {
          name: name,
          email: email,
          password: password,
          role: role,
        },
        headers: {
          contentType: "application/json",
        },
      });

      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_ALERT,
        payload: response.data.message,
      });
    } catch (err) {
      console.log(err);

      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
        dispatch({ type: REGISTER_FAIL });
      }
    }
  };

//Login User

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/auth",
        data: {
          email: email,
          password: password,
        },
        headers: {
          contentType: "application/json",
        },
      });


      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      dispatch({
        type: SET_ALERT,
        payload: response.data.message,
      });
    } catch (err) {
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg)));
        dispatch({ type: LOGIN_FAIL });
      }
    }
  };

//Log Out and Clear the profile

export const logout = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
  // dispatch({ type: CLEAR_PROFILE });
};

//https://www.bezkoder.com/react-hooks-redux-login-registration-example/

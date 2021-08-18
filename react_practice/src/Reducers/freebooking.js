import userEvent from "@testing-library/user-event";
import {
  FREEBOOKINGSUCCESS,
  FREEBOOKINGFAIL,
  GETBOOKINGSUCCESS,
  GETBOOKINGFAIL,
  APPROVEFAIL,
  APPROVESUCCESS,
  DELETEFAIL,
  DELETESUCCESS,
} from "../Actions/type";

const initialState = {
  message: "",
  error: "",
  user: [], //payload or res data for /api/auth give back the authenticated user
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FREEBOOKINGSUCCESS:
      return {
        ...state,
        message: payload,
      };

    case FREEBOOKINGFAIL:
      return {
        ...state,
        error: payload,
      };

    case GETBOOKINGSUCCESS:
      return {
        ...state,
        user: payload,
      };

    case GETBOOKINGFAIL:
      return {
        ...state,
        error: payload,
      };

    case APPROVESUCCESS:
      let index = state.user.findIndex((user) => user.user == payload.user);
      let newArray = [...state.user];
      newArray[index].status = "1";

      return {
        ...state,
        user: newArray,
      };

    case APPROVEFAIL:
      return {
        ...state,
        error: payload,
      };

    case DELETESUCCESS:
      return {
        ...state,
        message: payload,
      };
    case DELETEFAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}

//https://medium.com/swlh/few-ways-to-update-a-state-array-in-redux-reducer-f2621ae8061

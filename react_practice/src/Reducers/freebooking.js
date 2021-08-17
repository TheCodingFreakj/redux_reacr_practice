import {
  FREEBOOKINGSUCCESS,
  FREEBOOKINGFAIL,
  GETBOOKINGSUCCESS,
  GETBOOKINGFAIL,
  APPROVEFAIL,
  APPROVESUCCESS,
} from "../Actions/type";

const initialState = {
  message: "",
  error: "",
  user: [], //payload or res data for /api/auth give back the authenticated user
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
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
      return {
        ...state,
        user: payload,
      };

    case APPROVEFAIL:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
}

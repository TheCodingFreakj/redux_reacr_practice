import {
  FREEBOOKINGSUCCESS,
  FREEBOOKINGFAIL,
  PAIDBOOKINGFAIL,
  PAIDBOOKINGSUCCESS,
  SET_ALERT,
} from "../Actions/type";

const initialState = {
  message: "",
  user: null, //payload or res data for /api/auth give back the authenticated user
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
        message: payload,
      };

    default:
      return state;
  }
}

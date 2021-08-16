import {
  FREEBOOKINGSUCCESS,
  FREEBOOKINGFAIL,
  PAIDBOOKINGFAIL,
  PAIDBOOKINGSUCCESS,
  SET_ALERT,
} from "../Actions/type";
import axios from "axios";
export const bookFreeSlots =
  ({ time, user }) =>
  async (dispatch) => {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:9000/api/freebooking",
        data: {
          time,
          user,
        },
        headers: {
          contentType: "application/json",
        },
      });

      dispatch({
        type: FREEBOOKINGSUCCESS,
        payload: response.data.message,
      });
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: FREEBOOKINGFAIL,
        payload: err.response.data.message,
      });
    }
  };

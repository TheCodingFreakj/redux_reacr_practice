import {
  FREEBOOKINGSUCCESS,
  FREEBOOKINGFAIL,
  GETBOOKINGSUCCESS,
  GETBOOKINGFAIL,
  APPROVEFAIL,
  APPROVESUCCESS,
  DELETEFAIL,
  DELETESUCCESS,
  GETURBOOKINGSUCCESS,
  GETURBOOKINGFAIL

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

export const fetchFreeSlots = () => async (dispatch) => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:9000/api/freebooking",
    });

    dispatch({
      type: GETBOOKINGSUCCESS,
      payload: response.data,
    });
  } catch (err) {
    // console.log(err.response.data);
    dispatch({
      type: GETBOOKINGFAIL,
      payload: err.response.data.message,
    });
  }
};

export const approveFreeSlots =
  ({ user }) =>
  async (dispatch) => {
    try {
      const response = await axios({
        method: "put",
        url: "http://localhost:9000/api/freebooking",
        data: {
          user,
        },
        headers: {
          contentType: "application/json",
        },
      });
      console.log(response);

      dispatch({
        type: APPROVESUCCESS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: APPROVEFAIL,
        // payload: err.response.data,
      });
    }
  };

export const deleteFreeSlots =
  ({ user }) =>
  async (dispatch) => {
    try {
      const response = await axios({
        method: "delete",
        url: "http://localhost:9000/api/freebooking",
        data: {
          user,
        },
        headers: {
          contentType: "application/json",
        },
      });
      console.log(response);

      dispatch({
        type: DELETESUCCESS,
        payload: response.data.message,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: DELETEFAIL,
        // payload: err.response.data,
      });
    }
  };

export const fetchslotbookedbyyou = (userid) => async (dispatch) => {
  console.log(userid);
  console.log(`http://localhost:9000/api/freebooking/${userid}`);
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:9000/api/freebooking/${userid}`,
    });
  

    dispatch({
      type: GETURBOOKINGSUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GETURBOOKINGFAIL,
      payload: err.response.data.message,
    });
  }
};

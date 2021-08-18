import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFreeSlots,
  approveFreeSlots,
  deleteFreeSlots,
} from "../../Actions/slotbooking";
import Message from "../Utils/messages";

const AluminiProfile = () => {
  const getbookingdispatch = useDispatch();
  const slotsbookedfree = useSelector((state) => state.freebooking);
  //  console.log(slotsbookedfree);
  React.useEffect(() => {
    getbookingdispatch(fetchFreeSlots());
  }, []);
  const approvebookingdispatch = useDispatch();
  const deletebookingdispatch = useDispatch();
  const approvebooking = (user) => {
    approvebookingdispatch(approveFreeSlots({ user }));
  };

  const deletebooking = (user) => {
    deletebookingdispatch(deleteFreeSlots({ user }));
  };
  return (
    <div>
      {slotsbookedfree.message ? (
        <>
          <Message variant="success">{slotsbookedfree.message}</Message>
        </>
      ) : null}

      {slotsbookedfree ? (
        slotsbookedfree.user.map((user) => {
          return (
            <div>
              <h3>{user.name}</h3>
              <h4>{user.time}</h4>
              {user.status !== "1" ? (
                <button onClick={() => approvebooking(user)}>Pending</button>
              ) : (
                <button>Approve</button>
              )}

              <button onClick={() => deletebooking(user)}> Delete</button>
            </div>
          );
        })
      ) : (
        <div>....loadiong</div>
      )}
    </div>
  );
};

export default AluminiProfile;

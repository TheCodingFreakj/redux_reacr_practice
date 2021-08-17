import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFreeSlots, approveFreeSlots } from "../../Actions/slotbooking";
import Message from "../Utils/messages";
const AluminiProfile = () => {
  const getbookingdispatch = useDispatch();
  const slotsbookedfree = useSelector((state) => state.freebooking);
  // console.log(slotsbookedfree);
  React.useEffect(() => {
    getbookingdispatch(fetchFreeSlots());
  }, []);
  const approvebookingdispatch = useDispatch();
  const approvebooking = (user) => {
    approvebookingdispatch(approveFreeSlots({ user }));
  };
  return (
    <div>
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

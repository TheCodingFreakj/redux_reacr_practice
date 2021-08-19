import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchslotbookedbyyou } from "../../Actions/slotbooking";
import Message from "../Utils/messages";
const StudentProfile = () => {
  const getbookingdispatch = useDispatch();
  const gettheuser = useSelector((state) => state.auth);
  const slotsbookedfree = useSelector((state) => state.freebooking);
  const thisuser = gettheuser.user._id;
  console.log(slotsbookedfree);
  React.useEffect(() => {
    console.log("this is hitting");
    getbookingdispatch(fetchslotbookedbyyou(thisuser));
  }, []);
  return (
    <div>
      {slotsbookedfree.allbookingbyuser
        ? slotsbookedfree.allbookingbyuser.map((nooks) => {
            return (
              <div>
                <h3>{nooks.name}</h3>
                <h4>{nooks.time}</h4>
                {nooks.status !== "1" ? (
                  <p>Pending</p>
                ) : (
                  <p>You have been approve</p>
                )}

                {nooks.status === "1" ? <p>Book more slots</p> : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default StudentProfile;

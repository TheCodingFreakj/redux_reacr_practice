import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { bookFreeSlots } from "../../Actions/slotbooking";
import Message from "../Utils/messages";
import "./style.css";
const TimeSlot = () => {
  const auth = useSelector((state) => state.auth);
  const slotsbookedfree = useSelector((state) => state.freebooking);
  console.log(slotsbookedfree);
  const [loading, setLoading] = React.useState(false);
  const [timeslots, settimeslots] = React.useState([]);
  const [freetime, setfreetime] = React.useState([
    "01:00 PM-02:00 PM",
    "03:00 PM-04:00 PM",
    "05:00 PM-06:00 PM",
  ]);
  function getTimeStops(start, end) {
    var startTime = moment(start, "hh:mm A");
    var endTime = moment(end, "hh:mm A");

    if (endTime.isBefore(startTime)) {
      endTime.add(1, "day");
    }

    var timeStops = [];

    while (startTime <= endTime) {
      timeStops.push(new moment(startTime).format("hh:mm A"));
      startTime.add(60, "minutes");
    }
    return timeStops;
  }

  React.useEffect(() => {
    settimeslots(getTimeStops("8:00 AM", "7:00 PM"));
  }, []);
  const freebookingdispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // console.log(user);
  const handleClikBook = (time, user) => {
    //dispatch action to create a booking
    setLoading(true);
    freebookingdispatch(bookFreeSlots({ time, user }));
    setLoading(false);
  };

  return (
    <div className="slot_system">
      <div className="free_slot_system">
        {slotsbookedfree.message ? (
          <>
            <Message variant="success">{slotsbookedfree.message}</Message>
          </>
        ) : null}

        {slotsbookedfree.error ? (
          <>
            <Message variant="failed">{slotsbookedfree.error}</Message>
          </>
        ) : null}

        <h2>Free Booking </h2>

        {timeslots.map((item, index) => {
          const time = freetime.includes(
            timeslots[index] + "-" + timeslots[index + 1]
          )
            ? timeslots[index] + "-" + timeslots[index + 1]
            : null;

          return (
            <>
              <h3>{time}</h3>
              {time === null ? (
                ""
              ) : (
                <button onClick={() => handleClikBook(time, user)}>book</button>
              )}
            </>
          );
        })}
      </div>

      {auth.isAuthenticated  ? (
        <div className="buisy_slot_system">
          <h2>Requires Approval</h2>
          {timeslots.map((item, index) => {
            const busytime = timeslots[index + 1]
              ? timeslots[index] + "-" + timeslots[index + 1]
              : null;
            return (
              <>
                <h3>{busytime}</h3>
                {freetime.includes(busytime) || busytime === null ? (
                  ""
                ) : (
                  <button>book</button>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <h1>wait for approval to book slot</h1>
      )}
    </div>
  );
};

export default TimeSlot;

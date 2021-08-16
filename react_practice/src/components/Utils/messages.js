import { useState, useEffect } from "react";
import "./messages.css";
const Message = (props) => {
  // console.log(props);
  const [show, setShow] = useState(true);

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeId);
    };
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  //className={`alert alert-${variant}`}

  // If show is true this will be returned
  return <div className={`alert-${props.variant}`}>{props.children}</div>;
};

export default Message;

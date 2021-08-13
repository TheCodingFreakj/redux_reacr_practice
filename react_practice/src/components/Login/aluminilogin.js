import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { loginUser } from "../../Actions/auth";
import { isEmail } from "validator";
import { Redirect, Link } from "react-router-dom";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const AluminLogin = () => {
  const form = React.useRef();
  const checkBtn = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [successful, setSuccessful] = React.useState(false);
  const dispatch = useDispatch();
  const alertmessage = useSelector((state) => state.alert);
 
  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setSuccessful(false);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      dispatch(loginUser({ email, password }))
        .then((data) => {
          console.log(data);
          setSuccessful(true);
          return <Redirect to="/alumini-profile" />;
          // window.location.reload();
        })
        .catch(() => {
          setLoading(false);
          setSuccessful(false);
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="main_content">
        <Form onSubmit={handleRegister} ref={form}>
          {!successful ? (
            <div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeEmail}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                />
              </div>

              <div className="form-group">
                <button className="btn btn-primary btn-block">Sign Up</button>
              </div>
            </div>
          ) : (
            <>
              <h2>{alertmessage}</h2>

              <p className="my-1">
                Got to? <Link to="/alumini-profile">Login From Here</Link>
              </p>
            </>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
      {/* <p className="my-1">
        Already have an account? <Link to="/login">Login From Here</Link>
      </p> */}
    </React.Fragment>
  );
};

export default AluminLogin;

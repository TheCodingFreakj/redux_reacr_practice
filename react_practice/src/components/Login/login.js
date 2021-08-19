import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { loginUser } from "../../Actions/auth";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Login = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const alertmessage = useSelector((state) => state.alert);

  const [successful, setSuccessful] = React.useState(false);
  const onChangeUsername = (e) => {
    const email = e.target.value;
    setemail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessful(false);
    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      dispatch(loginUser({ email, password }))
        .then((data) => {
         
          setSuccessful(true);
          return <Redirect to="/student-profile" />;
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
        <Form onSubmit={handleLogin} ref={form}>
          {!successful ? (
            <div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={onChangeUsername}
                  validations={[required]}
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
                  validations={[required]}
                />
              </div>

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2>{alertmessage}</h2>

              <p className="my-1">
                Got to? <Link to="/student-profile">Login From Here</Link>
              </p>
            </>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </React.Fragment>
  );
};
export default Login;

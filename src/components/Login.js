import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Login = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigation({ pathname: "/" });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <>
      <div className="tab-container">
        <div className="inner-tab-container">
          <Card>
            <h4>Sign in to your account</h4>
            <form>
              <div className="card-details">
                <label htmlFor="email">
                  <strong style={{ fontSize: "14px" }}>Email</strong>
                </label>
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">
                  <strong style={{ fontSize: "14px" }}>Password</strong>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button-container">
                <Button style={{ width: "90%" }} type="submit" onClick={login}>
                  Continue
                </Button>
              </div>
            </form>
          </Card>
          <div style={{ marginTop: "1rem" }}>
            <h6>
              Don't have an account? <Link to="/register">Sign up</Link>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

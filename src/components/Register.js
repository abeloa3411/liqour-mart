import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Register = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    if (
      email !== "" &&
      email !== null &&
      password !== "" &&
      password !== null
    ) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation({ pathname: "/signin" });
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <>
      <div className="tab-container">
        <div className="inner-tab-container">
          <Card>
            <h4>Create your account</h4>
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
                <Button
                  style={{ width: "90%" }}
                  type="submit"
                  onClick={register}
                >
                  Create account
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Register;

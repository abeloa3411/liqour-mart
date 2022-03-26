import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Register = () => {
  const navigation = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
    }
    if (
      email !== "" &&
      email !== null &&
      password !== "" &&
      password !== null &&
      password === confirmPassword
    ) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          navigation({ pathname: "/" });
        })
        .catch((error) => alert(error.message));
    }
  };
  return (
    <>
      <div className="tab-container">
        <div className="inner-tab-container">
          <Card>
            <header
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  fontFamily: "Dancing Script",
                }}
              >
                LIQOUR MART
              </h3>
              <h4>Create your account</h4>
            </header>
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
                <label htmlFor="password">
                  <strong style={{ fontSize: "14px" }}>
                    Cornfirm Password
                  </strong>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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

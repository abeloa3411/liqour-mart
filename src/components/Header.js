import React from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import { auth } from "./Firebase";

const Header = () => {
  const {
    state: { cart, user },
  } = CartState();

  const handleSignOut = () => {
    auth.signOut();
  };

  console.log(user);

  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 80 }} sticky="top">
        <Container>
          <Navbar.Brand>
            <Link
              to="/"
              style={{
                fontFamily: "Dancing Script",
                textDecoration: "none",
                color: "white",
              }}
            >
              LIQOUR MART
            </Link>
          </Navbar.Brand>
          <Nav
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
              <div
                style={{
                  marginRight: "1rem",
                }}
                onClick={handleSignOut}
              >
                <span>
                  <p>{user?.email}</p>
                </span>
                <span>
                  <p style={{ color: "white", marginRight: "0.5rem" }}>
                    {user ? "Sign out" : "Sign in"}
                  </p>
                </span>
              </div>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
              <FaShoppingCart style={{ fontSize: "25px" }} />
              <Badge>{cart.length}</Badge>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

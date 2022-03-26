import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartState } from "../context/Context";
import Header from "./Header";

const Checkout = () => {
  const {
    state: { cart, user },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((values, item) => {
        return values + Number(item.price);
      }, 0)
    );
  }, [cart]);

  return (
    <>
      <Header />
      <div className="checkout-container">
        <div stye={{ width: "70%", marginLeft: "1rem" }}>
          <Card className="mb-2">
            <Card.Header>1. ADRESS DETAILS</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  <strong>Hi there, {user?.email}</strong>
                </p>
                <footer className="blockquote-footer">
                  <p>jerusalem,Buruburu / Hamza / Harambee, Nairobi</p>
                  <cite title="Source Title">+254716016624</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
          <Card className="mb-2">
            <Card.Header>2. DELIVERY METHOD</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  <strong>How do you want your order delivered?</strong>
                </p>
                <footer className="blockquote-footer">
                  <div>
                    <span>
                      <input type="radio" />
                      <strong>Pickup Station</strong>
                      <p>
                        <small>ready for pickup between</small>
                        <strong> {new Date().getFullYear()} </strong> with
                        cheaper shipping fees
                      </p>
                    </span>
                    <Button>select station</Button>
                  </div>
                </footer>
              </blockquote>
            </Card.Body>
            <Card.Body>
              <blockquote>
                <span>
                  <input type="radio" />
                  <strong> Delivery to your home or office</strong>
                  <p>
                    currently we are not doing home delivery but you can check
                    the nearest pickup station{" "}
                  </p>
                </span>
              </blockquote>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>3. PAYMENT METHOD</Card.Header>
            <Card.Body>
              <Button>Procceed to payment</Button>
            </Card.Body>
          </Card>
        </div>
        <div style={{ width: "30%", marginLeft: "1rem" }}>
          <Card>
            <Card.Header>YOUR ORDER ({cart.length} items) </Card.Header>
            <Card.Body>
              {cart.map((item) => {
                return (
                  <div key={item.id}>
                    <span style={{ display: "flex" }}>
                      <Card.Img
                        src={item.image}
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="checkout-details">
                        <strong>{item.title}</strong>
                        <p>
                          <strong>Ksh. {item.price}</strong>
                        </p>
                      </div>
                    </span>
                  </div>
                );
              })}
              <footer style={{ dispaly: "flex", flexDirection: "column" }}>
                <div style={{ marginTop: "1rem" }}>
                  <span>
                    <span>Subtotal: </span>
                    <span>{total}</span>
                  </span>
                  <span></span>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Link to="/cart">
                    <Button>Modify Cart</Button>
                  </Link>
                </div>
                <div style={{ marginTop: "1rem" }}>
                  <Link to="/">
                    <Button>Contunue shopping</Button>
                  </Link>
                </div>
              </footer>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Checkout;

import React, { useEffect, useState } from "react";
import { Button, Col, Image, ListGroup, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => {
        return acc + Number(cur.price);
      }, 0)
    );
  }, [cart]);
  return (
    <>
      <Header />
      <div className="cart">
        <div className="cart-container">
          {cart.map((cartItem) => {
            return (
              <ListGroup>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <Image
                        src={cartItem.image}
                        alt={cartItem.title}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col>
                      <span>
                        <strong>{cartItem.title}</strong>
                      </span>
                    </Col>
                    <Col>
                      <span>
                        <strong>Ksh. {cartItem.price}.00</strong>
                      </span>
                    </Col>
                    <Col>
                      <Button
                        onClick={() => {
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: cartItem,
                          });
                        }}
                      >
                        <AiFillDelete />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </div>
        <div className="total-container">
          <span>
            <strong>subtotal</strong> <strong>{cart.length} items</strong>
          </span>
          <span>
            <strong>Total Ksh. {total}.00</strong>
          </span>
          <Link to={cart.length !== 0 && "/checkout"}>
            <Button>Go to Checkout</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

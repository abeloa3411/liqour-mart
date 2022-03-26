import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";

const CardComponent = ({ product }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <>
      <div className="products">
        <Card style={{ width: "18rem" }}>
          <Card.Img src={product.image} alt={product.title} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>Ksh {product.price}.00</strong>
            </Card.Text>
            {cart.some((p) => p.id === product.id) ? (
              <Button
                variant="danger"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
              >
                Add to Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default CardComponent;

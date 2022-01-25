import React, { createContext, useContext, useReducer } from "react";
import { liqours } from "../components/Data";
import { cartreducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const products = liqours.map(({ id, title, img, price }) => {
    return {
      id: id,
      title: title,
      image: img,
      price: price,
    };
  });

  const [state, dispatch] = useReducer(cartreducer, {
    products: products,
    cart: [],
    user: null,
  });

  // console.log(products);
  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

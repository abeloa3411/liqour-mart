import React from "react";
import { CartState } from "../context/Context";
import CardComponent from "./CardComponent";

const ProductComponent = ({ search }) => {
  const { state } = CartState();
  return (
    <div className="home">
      {state.products
        .filter((item) => {
          return item.title.toLowerCase().indexOf(search) > -1;
        })
        .map((product) => {
          return <CardComponent product={product} key={product.id} />;
        })}
    </div>
  );
};

export default ProductComponent;

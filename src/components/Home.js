import React from "react";
import { CartState } from "../context/Context";
import CardComponent from "./CardComponent";
import Header from "./Header";
import Hero from "./Hero";
import "./Style.css";

const Home = () => {
  const { state } = CartState();
  return (
    <>
      <Header />
      <Hero />
      <div className="home">
        {state.products.map((product) => {
          return <CardComponent product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Home;

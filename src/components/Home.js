import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import ProductComponent from "./ProductComponent";
import Search from "./Search";
import "./Style.css";

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Hero />
      <Search
        type={"text"}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={"search for liqour"}
      />
      <ProductComponent search={search} />
      <Footer />
    </>
  );
};

export default Home;

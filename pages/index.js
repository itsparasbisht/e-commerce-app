import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Paintings</h2>
        <p>Arts you will love to take home</p>
      </div>
      <div className="products-container">
        {["Painting1", "Painting2"].map((painting) => painting)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;

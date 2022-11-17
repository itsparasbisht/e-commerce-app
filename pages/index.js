import React from "react";

const Home = () => {
  return (
    <>
      HeroBanner
      <div>
        <h2>Best Selling Paintings</h2>
        <p>Arts you will love to take home</p>
      </div>
      <div>{["Painting1", "Painting2"].map((painting) => painting)}</div>
      Footer
    </>
  );
};

export default Home;

import React from "react";
import "./Offers.css";
import exImg from "../../Assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="container offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <h4>Only On Best Sellers Products</h4>
        <button className="check-now">Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exImg} alt="" />
      </div>
    </div>
  );
};

export default Offers;

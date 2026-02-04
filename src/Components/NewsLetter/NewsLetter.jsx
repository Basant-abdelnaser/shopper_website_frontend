import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsLetter container">
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>subscribe to our newsletter and stay updated.</p>
      <div className="input-field">
        <input type="email" placeholder="Your email id" />
        <button className="subscribe">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;

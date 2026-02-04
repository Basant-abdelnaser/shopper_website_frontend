import React from "react";
import arrow from "../Assets/arrow.png";
import heroImg from "../Assets/hero_image.png";
import handIcon from "../Assets/hand_icon.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="subtitle">NEW ARRIVALS ONLY</h2>
        <div className="new">
          <h2>new</h2>
          <img src={handIcon} className="handIcon" alt="waving hand icon" />
        </div>
        <h2>collections</h2>
        <h2>for everyone</h2>
        <button className="latest-collection">
          Latest Collection
          <img src={arrow} alt="arrow icon" />
        </button>
      </div>
      <div className="hero-right">
        <img
          src={heroImg}
          alt="Fashion model showing latest collection"
          className="heroImg"
        />
      </div>
    </div>
  );
};

export default Hero;

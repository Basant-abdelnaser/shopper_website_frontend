import React from "react";
import "./Item.css";

const Item = ({ image, name, new_price, old_price }) => {
  console.log("name is ", name);
  return (
    <div className="item">
      <img src={image} alt="" />
      <p className="description">{name}</p>
      <div className="price">
        <span>{new_price}$</span>
        <del>{old_price}$</del>
      </div>
    </div>
  );
};

export default Item;

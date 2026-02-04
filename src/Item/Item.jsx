import React from "react";
import "./Item.css";
import { useNavigate } from "react-router-dom";

const Item = ({ image, name, new_price, old_price, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => {
        window.scrollTo(0, 0);
        navigate(`/product/${id}`);
      }}
    >
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

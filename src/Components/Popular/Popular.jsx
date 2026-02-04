import React from "react";
import data_product from "../../Assets/data";
import Item from "../../Item/Item";
import "./Popular.css";

const Popular = () => {
  const products = data_product.map((product) => {
    console.log(product.image);
    return (
      <Item
        image={product.image}
        name={product.name}
        new_price={product.new_price}
        old_price={product.old_price}
        key={product.id}
      />
    );
  });

  return (
    <div className="popular">
      <h2 className="popular-title">Popular in Woman</h2>

      <div className="popular-items container">{products}</div>
    </div>
  );
};

export default Popular;

import React from "react";
import new_collections from "../../Assets/new_collections";
import Item from "../../Item/Item";
import "./NewCollection.css";
const NewCollection = () => {
  const products = new_collections.map((product) => {
    return (
      <Item
        image={product.image}
        name={product.name}
        new_price={product.new_price}
        old_price={product.old_price}
        key={product.id}
        id={product.id}
      />
    );
  });

  return (
    <div className="popular">
      <h2 className="popular-title">New Collections</h2>

      <div className="popular-items container">{products}</div>
    </div>
  );
};

export default NewCollection;

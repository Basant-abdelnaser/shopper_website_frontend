import React from "react";
import data_product from "../../Assets/data";
import Item from "../../Item/Item";
import "./RelatedProducts.css";
const RelatedProducts = () => {
  return (
    <div className="relatedProducts">
      <h1>Related Products</h1>
      <div className="relatedProductsContainer">
        {data_product.map((product) => {
          return (
            <Item
              image={product.image}
              name={product.name}
              new_price={product.new_price}
              old_price={product.old_price}
              key={product.id}
              id={product.id}
            ></Item>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

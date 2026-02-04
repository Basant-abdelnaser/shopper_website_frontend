import React, { useContext } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import Item from "../../Item/Item";
import menBanner from "../../Assets/banner_mens.png";
import womenBanner from "../../Assets/banner_women.png";
import kidsBanner from "../../Assets/banner_kids.png";
import dropDownArrow from "../../Assets/dropdown_icon.png";
import "./ShopCategory.css";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  console.log("allll", all_product);
  let filteredProducts = [];
  let banner = "";
  if (category === "women") {
    filteredProducts = all_product.filter(
      (product) => product.category === "women",
    );
    banner = womenBanner;
  } else if (category === "men") {
    filteredProducts = all_product.filter(
      (product) => product.category === "men",
    );
    banner = menBanner;
  } else {
    filteredProducts = all_product.filter(
      (product) => product.category === "kid",
    );
    banner = kidsBanner;
  }
  return (
    <div className="container  shopCategory">
      <img src={banner} alt="" className="banner" />
      <div className="text">
        <p>showing 1 - 12 out of {all_product.length} products</p>
        <div className="sort">
          {/* <select name="sort" id="sort">
          <option value="newest">price</option>
          <option value="newest">name</option>
        </select> */}
          sort by
          <img src={dropDownArrow} alt="" />
        </div>
      </div>
      <div className="products">
        {filteredProducts.map((product) => {
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
        })}
      </div>
      <div className="loadMore">
        <p>Load More </p>
      </div>
    </div>
  );
};

export default ShopCategory;

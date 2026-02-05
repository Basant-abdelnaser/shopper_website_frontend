import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../Contexts/ShopContext";
import Item from "../../Item/Item";
import menBanner from "../../Assets/banner_mens.png";
import womenBanner from "../../Assets/banner_women.png";
import kidsBanner from "../../Assets/banner_kids.png";
import dropDownArrow from "../../Assets/dropdown_icon.png";
import "./ShopCategory.css";

const ShopCategory = ({ category }) => {
  const { all_product } = useContext(ShopContext);
  const [sortMenu, setSortMenu] = useState(false);
  const [products, setProducts] = useState([]);
  const [banner, setBanner] = useState("");

  /* ================= Filter products on category change ================= */
  useEffect(() => {
    let filtered = [];

    if (category === "women") {
      filtered = all_product.filter((p) => p.category === "women");
      setBanner(womenBanner);
    } else if (category === "men") {
      filtered = all_product.filter((p) => p.category === "men");
      setBanner(menBanner);
    } else {
      filtered = all_product.filter((p) => p.category === "kid");
      setBanner(kidsBanner);
    }

    setProducts(filtered);
  }, [category, all_product]);

  /* ================= Sort handlers ================= */
  const sortByPrice = () => {
    setProducts((prev) => [...prev].sort((a, b) => a.new_price - b.new_price));
    setSortMenu(false);
  };

  const sortByName = () => {
    setProducts((prev) =>
      [...prev].sort((a, b) => a.name.localeCompare(b.name)),
    );
    setSortMenu(false);
  };

  return (
    <div className="container shopCategory">
      <img src={banner} alt="category banner" className="banner" />

      <div className="text">
        <p>showing 1 - {products.length} products</p>

        <div className="sortContainer">
          <div className="sort" onClick={() => setSortMenu(!sortMenu)}>
            sort by
            <img
              src={dropDownArrow}
              alt=""
              className="sortArrow"
              style={{
                transform: sortMenu ? "rotate(90deg)" : "rotate(0deg)",
              }}
            />
          </div>

          <div
            className={`sortActions ${sortMenu ? "activeSort" : " notActiveSort"}`}
          >
            <ul>
              <li onClick={sortByPrice}>price</li>
              <li onClick={sortByName}>name</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="products">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.name}
            new_price={product.new_price}
            old_price={product.old_price}
          />
        ))}
      </div>

      <button className="loadMore">Load More...</button>
    </div>
  );
};

export default ShopCategory;

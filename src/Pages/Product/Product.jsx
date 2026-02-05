import React, { useContext, useState } from "react";
import all_product from "../../Assets/all_product";
import { useParams } from "react-router-dom";
import "./Product.css";
import RelatedProducts from "../../Components/relatedProducts/RelatedProducts";
import { ShopContext } from "../../Contexts/ShopContext";
import  { successToast } from "../../Components/ToastMsg/Toast";

const Product = () => {
  const { id } = useParams();
  const product = all_product.find((p) => p.id === Number(id));

  const [selected, setSelected] = useState(null);
  const [addTocartButton, SetAddToCartButton] = useState(false);
  const { addToCart} = useContext(ShopContext);

  return (
    <div>
      <div className="productDetails container">
        {/* LEFT */}
        <div className="leftDetails">
          <p className="breadcrumb">
            Home &gt; Shop &gt; {product.category} &gt; {product.name}
          </p>

          <div className="imgContainer">
            <div className="leftImgs">
              {[1, 2, 3, 4].map((_, i) => (
                <img key={i} src={product.image} alt={product.name} />
              ))}
            </div>

            <div className="rightImgs">
              <img src={product.image} alt={product.name} />
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rightDetails">
          <h1>{product.name}</h1>

          <div className="rating">⭐⭐⭐⭐☆ (122)</div>

          <div className="price">
            <span>${product.new_price}</span>
            <del>${product.old_price}</del>
          </div>

          <p className="description">{product.name}</p>

          <div className="selectSize">
            <p>Select Size</p>
            <ul>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <li
                  key={size}
                  onClick={() => {
                    setSelected(size);
                  }}
                  className={selected === size ? "selected" : ""}
                >
                  {" "}
                  {size}
                </li>
              ))}
            </ul>
          </div>

          <button
            className={`addToCart ${addTocartButton ? "added" : ""}`}
            onClick={() => {
              SetAddToCartButton(true);
              addToCart(product.id);
               successToast("Added to cart successfully");
            }}
          >
            {addTocartButton ? "Added to cart" : "Add to cart"}
          </button>

          <p>
            <span>Category:</span> {product.category}
          </p>
          <p>
            <span>Tags:</span> Modern, Latest
          </p>
        </div>
      </div>
      <div className="container">
        <RelatedProducts />
      </div>
    
    </div>
  );
};

export default Product;

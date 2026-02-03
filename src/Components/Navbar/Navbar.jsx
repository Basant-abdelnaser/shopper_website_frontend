import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cart_icon.png";

const Navbar = () => {
  const cartItemCount = 3;
  const [active, setActive] = React.useState("shop");

  return (
    <div className="header">
      <div className="container nav-items">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h2>SHOPPER</h2>
        </div>

        <div className="nav-links">
          <ul>
            <li
              onClick={() => {
                setActive("shop");
              }}
              className={active === "shop" ? "active" : ""}
            >
              Shop
            </li>
            <li
              onClick={() => {
                setActive("men");
              }}
              className={active === "men" ? "active" : ""}
            >
              Men
            </li>
            <li
              onClick={() => {
                setActive("women");
              }}
              className={active === "women" ? "active" : ""}
            >
              Women
            </li>
            <li
              onClick={() => {
                setActive("kids");
              }}
              className={active === "kids" ? "active" : ""}
            >
              Kids
            </li>
          </ul>
        </div>

        <button className="login">Login</button>

        <div className="cart">
          <img src={cartIcon} alt="Cart" />
          {cartItemCount > 0 && (
            <div className="cart-count">{cartItemCount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

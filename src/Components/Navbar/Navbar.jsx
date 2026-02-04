import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cartItemCount = 3;
  const [active, setActive] = React.useState("shop");

  return (
    <div className="header">
      <div className="container nav-items">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black", border: "none" }}
        >
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>SHOPPER</h2>
          </div>
        </Link>

        <div className="nav-links">
          <ul>
            <li
              onClick={() => {
                setActive("shop");
              }}
              className={active === "shop" ? "active" : ""}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                Shop
              </Link>
            </li>

            <li
              onClick={() => {
                setActive("men");
              }}
              className={active === "men" ? "active" : ""}
            >
              <Link
                to="/men"
                style={{ textDecoration: "none", color: "black" }}
              >
                Men
              </Link>
            </li>
            <li
              onClick={() => {
                setActive("women");
              }}
              className={active === "women" ? "active" : ""}
            >
              <Link
                to="/women"
                style={{ textDecoration: "none", color: "black" }}
              >
                Women
              </Link>
            </li>
            <li
              onClick={() => {
                setActive("kids");
              }}
              className={active === "kids" ? "active" : ""}
            >
              <Link
                to="/kids"
                style={{ textDecoration: "none", color: "black" }}
              >
                Kids
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/login">
          <button className="login" onClick={() => {}}>
            Login
          </button>
        </Link>

        <Link to="/cart">
          <div className="cart">
            <img src={cartIcon} alt="Cart" />
            {cartItemCount > 0 && (
              <div className="cart-count">{cartItemCount}</div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

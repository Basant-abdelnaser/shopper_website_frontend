import React from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const cartItemCount = 3;

  return (
    <div className="header">
      <div className="container nav-items">
        {/* Logo */}
        <Link
          to="/"
          className="logo-link"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div className="logo">
            <img src={logo} alt="logo" />
            <h2>SHOPPER</h2>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <ul>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/men"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Men
              </NavLink>
            </li>

            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/women"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Women
              </NavLink>
            </li>

            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/kids"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Kids
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Login Button */}
        <Link to="/login">
          <button className="login">Login</button>
        </Link>

        {/* Cart */}
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

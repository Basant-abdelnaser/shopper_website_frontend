import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import cartIcon from "../../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../../Contexts/ShopContext";
import all_product from "../../Assets/all_product";

const Navbar = () => {
  const { cart } = useContext(ShopContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItems = Object.entries(cart)
    .filter(([_, quantity]) => quantity > 0)
    .map(([id, quantity]) => {
      const product = all_product.find((p) => p.id === Number(id));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  const cartItemCount = cartItems.length;

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

        {/* Desktop Links */}
        <div className="nav-links">
          <ul>
            {["/", "/men", "/women", "/kids"].map((path, i) => (
              <li key={i}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {path === "/"
                    ? "Shop"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Actions */}
        <div className="right-actions">
          <Link to="/login">
            <button className="login">Login</button>
          </Link>

          <Link to="/cart">
            <div className="cart">
              <img src={cartIcon} alt="Cart" />
              {cartItemCount > 0 && (
                <div className="cart-count">{cartItemCount}</div>
              )}
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Shop
          </NavLink>
          <NavLink to="/men" onClick={() => setMenuOpen(false)}>
            Men
          </NavLink>
          <NavLink to="/women" onClick={() => setMenuOpen(false)}>
            Women
          </NavLink>
          <NavLink to="/kids" onClick={() => setMenuOpen(false)}>
            Kids
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

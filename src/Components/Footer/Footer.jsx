import React from "react";
import bigLogo from "../../Assets/logo_big.png";
import "./Footer.css";
import instagram from "../../Assets/instagram_icon.png";
import whatsapp from "../../Assets/whatsapp_icon.png";
import pintrist from "../../Assets/pintester_icon.png";

const Footer = () => {
  return (
    <div className="footer container">
      <div className="footer-logo">
        <img src={bigLogo} alt="" />
        <h2>SHOPPER</h2>
      </div>
      <div className="footer-links">
        <ul>
          <li>Company</li>
          <li>Products</li>
          <li>Office</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="footer-icons">
        <img src={instagram} alt="" />
        <img src={whatsapp} alt="" />
        <img src={pintrist} alt="" />
      </div>
      <hr style={{ margin: "20px" }} />
      <div
        className="copyRight"
        style={{ fontSize: "12px", marginTop: "20px" }}
      >
        <p>Copyright @ 2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;

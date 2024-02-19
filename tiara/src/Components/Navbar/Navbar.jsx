import React from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart from "../Assets/cart.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" />
        <p>Tiara Boutique</p>
      </div>
      <div className="navbar-menu">
        <li>Home</li>
        <li>Women</li>
        <li>Kids</li>
      </div>
      <div className="navbar-login">
        <button>Login</button>
        <img src={cart} />
      </div>
    </div>
  );
}

export default Navbar;

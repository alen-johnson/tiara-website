import React from "react";
import "./Navbar.css";
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__header-menu">
          <MenuIcon/>
        </div>
        <div className="navbar__header-title">
          <h2>TIARA</h2>
        </div>
        <div className="navbar__header-links">
          <p>Login</p>
          <p>Wishlist</p>
          <p>Cart</p>
        </div>
      </div>
      <div className="navbar__slider">
        <p>Woman</p>
        <p>Kids</p>
        <p>Beauty</p>
      </div>
    </div>
  );
}

export default Navbar;

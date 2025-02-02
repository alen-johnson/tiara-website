import React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "../../Elements/DropdownButton/Dropdown";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate()
  return (
    <div className="navbar">
      <div className="navbar__header">
        <div className="navbar__header-menu">
          <MenuIcon sx={{color:'white'}}/>
        </div>
        <div className="navbar__header-title">
          <h2>Tiara</h2>
        </div>
        <div className="navbar__header-links">
          <Dropdown className="dropdown"/>
          <p onClick={()=>navigate('/wishlist')}> Wishlist</p>
          <p onClick={()=>navigate('/cart')}>Cart</p>
          <p onClick={()=>navigate('/auth')}>Login</p>
        </div>
      </div>
      <div className="navbar__slider"></div>
    </div>
  );
}

export default Navbar;

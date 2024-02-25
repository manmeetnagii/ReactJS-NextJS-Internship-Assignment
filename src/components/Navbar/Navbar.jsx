import React, { useState } from "react";
import searchIcon from "../../assets/search.svg";
import "./Navbar.scss";

const Navbar = () => {

  const [menu, setMenu] = useState(false);


  
  return (
    <div className="navbar-container">
      <div className="search">
        <img src={searchIcon} alt="" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-links">
        <a href="#">Categories</a>
        <a href="#">Website Builders</a>
        <a href="#">Today's deals</a>
      </div>
      <div className={(menu? 'mob-menu' : 'hidden')}>
        <a href="#">Categories</a>
        <a href="#">Website Builders</a>
        <a href="#">Today's deals</a>
      </div>
      <span onClick={() => setMenu(!menu)} class="material-symbols-outlined">menu</span>
    </div>
  );
};

export default Navbar;

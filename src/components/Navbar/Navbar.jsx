import React from 'react'
import searchIcon from "../../assets/search.svg"
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="search">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder='Search'/>
        </div>
        <div className="navbar-links">
            <a href="/">Categories</a>
            <a href="/">Website Builders</a>
            <a href="/">Today's deals</a>
        </div>
   </div>
  )
}

export default Navbar
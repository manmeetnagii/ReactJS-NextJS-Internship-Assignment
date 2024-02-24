import React from "react";
import downArrow from "../../assets/downArrow.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-container">
        <div className="categories">
          <h1>CATEGORIES</h1>
          <a href="/">Web Builder</a>
          <a href="/">Hosting</a>
          <a href="/">Data Center</a>
          <a href="/">Robotic-Automation</a>
        </div>
        <div className="contact">
          <h1>CONTACT</h1>
          <a href="/">Contact</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms Of Service</a>
          <a href="/">Categories</a>
          <a href="/">About</a>
        </div>
      </div>

      <div className="info-right">
        <span>United States</span>
        <img src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Footer;

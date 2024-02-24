import React from 'react'
import check from "../../assets/check.svg";
import info from "../../assets/info.svg";
import downArrow from "../../assets/downArrow.svg";
import breadcrum from "../../assets/breadcrumArrow.svg";
import './Header.scss'

const Header = () => {
  return (
    <div className="header-container">
      <h1>Best Website builders in the US</h1>
      <div className="info">
        <div className="info-left">
          <div className="last-updated">
            <img src={check} alt="" />
            <span>Last Updated - February 22, 2020</span>
          </div>
          <div className="adv-disclosure">
            <img src={info} alt="" />
            <span>Advertising Disclosure</span>
          </div>
        </div>
        <div className="info-right">
            <span>Top Relevant</span>
            <img src={downArrow} alt="" />
        </div>
      </div>

      <div className="menu">
        <div className="menu-item">
            <span>Tools</span>
        </div>
        <div className="menu-item">
            <span>AWS Builder</span>
        </div>
        <div className="menu-item">
            <span>Start Build</span>
        </div>
        <div className="menu-item">
            <span>Build Supplies</span>
        </div>
        <div className="menu-item">
            <span>Tooling</span>
        </div>
        <div className="menu-item">
            <span>Blue Hosting</span>
        </div>
      </div>

      <div className="breadcrum">
        <span>Home</span>
        <img src={breadcrum} alt="" />
        <span>Hosting for all</span>
        <img src={breadcrum} alt="" />
        <span>Hosting</span>
        <img src={breadcrum} alt="" />
        <span>Hosting6</span>
        <img src={breadcrum} alt="" />
        <span>Hosting5</span>
      </div>
    </div>
  )
}

export default Header
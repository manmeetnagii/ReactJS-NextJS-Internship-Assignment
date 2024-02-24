import React from 'react'
import './RelatedDeals.scss'
import img from "../../assets/cardImg.svg";

const RelatedDeals = () => {
  return (
    <div className="relatedDeals-container">
      
      <div className="relatedDeals">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div className="limited-time">
          <div className="perc-off">
            <span>20% Off</span>
          </div>
          <div className="perc-off">
            <span>Limited Time</span>
          </div>
        </div>
        <h3>Webbuilder 1</h3>
        <div className="pricing">
          <div className="title">
            <p>Computer Modern classic with wix support</p>
          </div>
          <div className="price-container">
            <span className="deal-price">$39.96</span>
            <span className="actual-price">$49.96</span>
            <span className="deal-perc">(20% Off)</span>
          </div>
        </div>
        <button className="btn">View Deal</button>
      </div>
    </div>
  )
}

export default RelatedDeals
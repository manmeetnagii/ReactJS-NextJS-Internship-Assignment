import React from "react";
import cardImg from "../../assets/cardImg.svg";
import showmore from "../../assets/showmore.svg";
import fullstars from "../../assets/fullstar.svg";
import halfStars from "../../assets/halfStar.svg";
import tick from "../../assets/tick.svg";
import { cdk } from "../CardDetails";
import "./CardCDK.scss";
import CdkHighlights from "../cdkHighlights/cdkHighlights";

const CardCDK = ({ title, desc, ratings, ratingsTitle, name, number }) => {
  return (
    <div className="cdk-card-container">
      <div className="cdk-card">
        <div className="cdk-numbering">
          <span>{number}</span>
        </div>
        <div className="cdk-card-content">
          <div className="cdk-left">
            <img src={cardImg} alt="" />
            <span>{name}</span>
          </div>

          <div className="cdk-middle">
            <div className="cdk-titleDesc">
              <span className="cdk-title">{title}</span>
              <span className="cdk-desc">{desc}</span>
            </div>
            <div className="cdk-perc-off">
              <span>26% Off</span>
            </div>
            <div className="cdk-main-highlights">
              <h2 className="cdk-highlights-heading">Main Highlights</h2>
              <div className="cdk-highlight-content">
                <div className="highlights-cdk">
                  <CdkHighlights
                    points={cdk.highlights.points[0]}
                    feature={cdk.highlights.feature[0]}
                  />
                  <CdkHighlights
                    points={cdk.highlights.points[1]}
                    feature={cdk.highlights.feature[1]}
                  />
                  <CdkHighlights
                    points={cdk.highlights.points[0]}
                    feature={cdk.highlights.feature[1]}
                  />
                </div>
              </div>
            </div>
            <div className="ptag">
              <p>Why we love it</p>
              <p className="cdk-checkmark">
                <span>
                  <img src={tick} alt="" />
                </span>
                <span>Documentation</span>
              </p>
              <p className="cdk-checkmark">
                <span>
                  <img src={tick} alt="" />
                </span>
                <span>Easy Use</span>
              </p>
              <p className="cdk-checkmark">
                <span>
                  <img src={tick} alt="" />
                </span>
                <span>Out Of Box</span>
              </p>
            </div>
            <span className="cdk-showmore">
              Show more <img src={showmore} alt="" />
            </span>
          </div>

          <div className="cdk-right">
            <div className="cdk-ratings-box">
              <span className="cdk-ratings">{ratings}</span>
              <span className="cdk-ratingstitle">{ratingsTitle}</span>
              <div className="cdk-stars">
                <span>
                  <img src={fullstars} alt="" />
                </span>
                <span>
                  <img src={fullstars} alt="" />
                </span>
                <span>
                  <img src={fullstars} alt="" />
                </span>
                <span>
                  <img src={fullstars} alt="" />
                </span>
                <span>
                  <img src={halfStars} alt="" />
                </span>
              </div>
            </div>

            <div className="cdk-view">
              <button className="cdk-btn">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCDK;

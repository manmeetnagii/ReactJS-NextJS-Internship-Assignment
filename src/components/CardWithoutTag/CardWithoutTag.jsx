import React from 'react'
import cardImg from "../../assets/cardImg.svg";
import showmore from "../../assets/showmore.svg";
import fullstars from "../../assets/fullstar.svg";
import halfStars from "../../assets/halfStar.svg";

const CardWithoutTag = ({
    title,
    desc,
    ratings,
    ratingsTitle,
    highlights,
    name,
    number
  }) => {
  return (
    <div className="card-container">
    <div className="numbering">
      <span>{number}</span>
    </div>
    <div className="card">
      <div className="card-content">
        <div className="left">
          <img src={cardImg} alt="" />
          <span>{name}</span>
        </div>

        <div className="middle">
          <div className="titleDesc">
            <span className="title">{title}</span>
            <span className="desc">{desc}</span>
          </div>
          <div className="main-highlights">
            <h2 className="highlights-heading">Main Highlights</h2>
            <div className="highlight-content">
              <span className="highlights">{highlights}</span>
            </div>
          </div>
          <span className="showmore">
            Show more <img src={showmore} alt="" />
          </span>
        </div>

        <div className="right">
          <div className="ratings-box">
            <span className="ratings">{ratings}</span>
            <span className="ratingstitle">{ratingsTitle}</span>
            <div className="stars">
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

          <div className="view">
            <button className="btn">View</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CardWithoutTag
import React from "react";
import "../css/HomeSection.css";
import Fade from "react-reveal/Fade";

const HomeSection = ({ img, title, desc, leftBtnText, rightBtnText, isDownArrow }) => {
  return (
    <div style={{ backgroundImage: `url(/images/${img})` }} className="wrap">
      <Fade bottom>
        <div className="item-text">
          <h1 className="car-name">{title}</h1>
          <p className="car-del">{desc}</p>
        </div>
      </Fade>
      <div className="sec-bottom">
        <Fade bottom>
          <div className="btn-group">
            <div className="left-btn btn">{leftBtnText}</div>
            {rightBtnText && <div className="right-btn btn">{rightBtnText}</div>}
          </div>
        </Fade>
        {isDownArrow ? <img className="down-arrow" src="/images/down-arrow.svg" /> : <img className="down-arrow1" src="" />}
      </div>
    </div>
  );
};

export default HomeSection;

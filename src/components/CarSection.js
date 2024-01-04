import React from "react";
import "../css/HomeSection.css";
import Fade from "react-reveal/Fade";

const CarSection = ({ img }) => {
  return (
    <div style={{ backgroundImage: `url(/images/${img})` }} className="wrap-small">
      <Fade bottom>
        <div className="item-text"></div>
      </Fade>
      <div className="sec-bottom">
        <Fade bottom>
          <div className="feature-group">
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">1,020</span>
                <span className="content-support">hp</span>
              </div>
              <p>Peak Power</p>
            </div>
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">9.23</span>
                <span className="content-support">s</span>
              </div>
              <p>@155 mph 1/4 mile</p>
            </div>
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">1.99</span>
                <span className="content-support">s</span>
              </div>
              <p>0-60 mph*</p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default CarSection;

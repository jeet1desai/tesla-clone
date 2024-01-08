import React from "react";
import "../css/models.css";
import Fade from "react-reveal/Fade";

const ShowCase = ({ img, title, desc }) => {
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
          <div className="feature-group">
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">390</span>
                <span className="content-support">mi</span>
              </div>
              <p>Range (est.)</p>
            </div>
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">1.99</span>
                <span className="content-support">s</span>
              </div>
              <p>0-60 mph*</p>
            </div>
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">200</span>
                <span className="content-support">mph</span>
              </div>
              <p>Top Speed†</p>
            </div>
            <div className="content-box">
              <div className="content-head">
                <span className="content-text">1,020</span>
                <span className="content-support">hp</span>
              </div>
              <p>Peak Power</p>
            </div>
            <button className="btn order-btn">Order Now</button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default ShowCase;

import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ShowCase from "../components/ShowCase";
import Fade from "react-reveal/Fade";
import ImageCarousel from "../components/Carousel";

import LROne from "../images/lr1.jpeg";
import LRTwo from "../images/lr2.jpeg";
import LRThree from "../images/lr3.jpeg";
import LRFour from "../images/lr4.jpeg";

import LRRedOne from "../images/lr1-red.jpeg";
import LRRedTwo from "../images/lr2-red.jpeg";
import LRRedThree from "../images/lr3-red.jpeg";

import CarSection from "../components/CarSection";

const ModelS = () => {
  return (
    <>
      <Navigation />
      <div style={{ height: "100vh" }}>
        <ShowCase title="Model S" desc="Paid" img="model-s.jpg" />
        <div className="scrim-section">
          <Fade bottom>
            <h2>All-New Interior</h2>
          </Fade>
        </div>
        <div style={{ backgroundImage: `url(/images/s-interior.jpeg)` }} className="wrap"></div>
        <div className="slide-section">
          <ImageCarousel />
        </div>
        <div className="scrim-section img-row-reverse">
          <div className="scrim-image-content">
            <img src={LROne} />
            <Fade bottom>
              <div className="content-box">
                <h4>Game from Anywhere</h4>
                <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
              </div>
            </Fade>
          </div>
          <div className="scrim-image-content reverse">
            <img src={LRTwo} />
            <Fade bottom>
              <div className="content-box">
                <h4>Game from Anywhere</h4>
                <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
              </div>
            </Fade>
          </div>
          <div className="scrim-image-content">
            <img src={LRThree} />
            <Fade bottom>
              <div className="content-box">
                <h4>Game from Anywhere</h4>
                <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
              </div>
            </Fade>
          </div>
          <div className="scrim-image-content reverse">
            <img src={LRFour} />
            <Fade bottom>
              <div className="content-box">
                <h4>Game from Anywhere</h4>
                <p>Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat.</p>
              </div>
            </Fade>
          </div>
        </div>
        <CarSection img="s-blue.jpeg" />
        <div className="banner-layout-box">
          <Fade bottom>
            <div className="banner-layout">
              <div className="left-banner">
                <h2>Exterior</h2>
                <h1>Designed for Efficiency</h1>
              </div>
              <div className="right-banner">
                <p>With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.</p>
              </div>
            </div>
            <button className="btn">Order Now</button>
          </Fade>
        </div>
        <CarSection img="s-red.jpeg" />
        <div className="banner-layout-box">
          <Fade bottom>
            <div className="banner-layout">
              <div className="left-banner">
                <h2>Exterior</h2>
                <h1>Designed for Efficiency</h1>
              </div>
              <div className="right-banner">
                <p>With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.</p>
              </div>
            </div>
            <button className="btn">Order Now</button>
          </Fade>
        </div>
        <div className="scrim-section img-row-reverse">
          <div className="scrim-image-content">
            <img src={LRRedOne} />
            <Fade bottom>
              <div className="content-box">
                <h4>Responsive Performance</h4>
                <p>Staggered, performance-focused wheels and tires keep the car planted and transfer even more power down to the road.</p>
              </div>
            </Fade>
          </div>
          <div className="scrim-image-content reverse">
            <img src={LRRedTwo} />
            <Fade bottom>
              <div className="content-box">
                <h4>Optimized Aerodynamics</h4>
                <p>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</p>
              </div>
            </Fade>
          </div>
          <div className="scrim-image-content">
            <img src={LRRedThree} />
            <Fade bottom>
              <div className="content-box">
                <h4>Refined Styling</h4>
                <p>Exterior design combines an iconic look with elegant proportions.</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="wrap-image-content">
          <div className="image-content">
            <CarSection img="s-red.jpeg" />
          </div>
          <div className="banner-content">
            <Fade bottom>
              <div className="banner-layout-box">
                <div className="banner-layout">
                  <div className="left-banner">
                    <h2>Exterior</h2>
                    <h1>Designed for Efficiency</h1>
                  </div>
                  <div className="right-banner">
                    <p>With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.</p>
                  </div>
                </div>
                <button className="btn">Order Now</button>
              </div>
            </Fade>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ModelS;

import React, { useState } from "react";
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

import LongRange from "../images/long-range.jpeg";
import Plaid from "../images/plaid.jpeg";

const ModelS = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Navigation />
      <div style={{ height: "100vh" }}>
        <ShowCase title="Model S" desc="Plaid" img="model-s.jpg" />
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
        <div className="long-plaid-content">
          <div className="content-header">
            <h2>Electric Powertrain</h2>
            <p>Long Range and Plaid platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</p>
          </div>
          {toggle ? <img src={LongRange} /> : <img src={Plaid} />}
          <div className="content-toggle-box">
            <ul>
              <li className={toggle && "active"}>
                <button onClick={() => setToggle(true)}>
                  <div>
                    <h3>Long Range</h3>
                    <p>Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.</p>
                  </div>
                  <div className="specification-content">
                    <div>
                      <h3>3.1 s</h3>
                      <p> 0-60 mph</p>
                    </div>
                    <div>
                      <h3>3412 mi</h3>
                      <p>range (est.)</p>
                    </div>
                    <div>
                      <h3>670 hp</h3>
                      <p>peak power</p>
                    </div>
                  </div>
                </button>
              </li>
              <li className={!toggle && "active"}>
                <button onClick={() => setToggle(false)}>
                  <div>
                    <h3>Plaid</h3>
                    <p>Dual Motor All-Wheel Drive platform allows for the longest range, and now delivers insane power and acceleration.</p>
                  </div>
                  <div className="specification-content">
                    <div>
                      <h3>3.1 s</h3>
                      <p> 0-60 mph</p>
                    </div>
                    <div>
                      <h3>3412 mi</h3>
                      <p>range (est.)</p>
                    </div>
                    <div>
                      <h3>670 hp</h3>
                      <p>peak power</p>
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
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

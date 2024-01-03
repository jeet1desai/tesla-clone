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
        <Footer />
      </div>
    </>
  );
};

export default ModelS;

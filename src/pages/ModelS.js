import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ShowCase from "../components/ShowCase";
import Fade from "react-reveal/Fade";

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
        <Footer />
      </div>
    </>
  );
};

export default ModelS;

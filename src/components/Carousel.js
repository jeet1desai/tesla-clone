import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideImageOne from "../images/slide1.jpeg";
import SlideImageTwo from "../images/slide2.jpeg";
import SlideImageThree from "../images/slide3.jpeg";
import SlideImageFour from "../images/slide4.jpeg";

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}>
      <>
        <img src={SlideImageOne} />
        <div className="legend">
          <h3>Redesigned Second Row</h3>
          <p>Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging.</p>
        </div>
      </>
      <>
        <img src={SlideImageTwo} />
        <div className="legend">
          <h3>Focus on Driving</h3>
          <p>The ultimate focus on driving: no stalks, no shifting. Model S is the best car to drive, and the best car to be driven in.</p>
        </div>
      </>
      <>
        <img src={SlideImageThree} />
        <div className="legend">
          <h3>Perfect Environment</h3>
          <p>Clean, powerful yet invisible cabin conditioning. Tri-zone temperature controls, ventilated front seats and HEPA filtration come standard.</p>
        </div>
      </>
      <>
        <img src={SlideImageFour} />
        <div className="legend">
          <h3>17” Cinematic Display</h3>
          <p>With 2200x1300 resolution, ultra bright, true colors, exceptional responsiveness and left-right tilt.</p>
        </div>
      </>
    </Carousel>
  );
};

export default ImageCarousel;

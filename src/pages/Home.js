import React from "react";
import HomeSection from "../components/HomeSection";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <div style={{ height: "100vh" }}>
        <HomeSection title="Model S" desc="Order Online for Touchless Delivery" img="model-s.jpg" leftBtnText="Custom order" rightBtnText="Existing Inventory" isDownArrow />
        <HomeSection title="Model Y" desc="Order Online for Touchless Delivery" img="model-y.jpg" leftBtnText="Custom order" rightBtnText="Existing Inventory" />
        <HomeSection title="Model 3" desc="Order Online for Touchless Delivery" img="model-3.jpg" leftBtnText="Custom order" rightBtnText="Existing Inventory" />
        <HomeSection title="Model X" desc="Order Online for Touchless Delivery" img="model-x.jpg" leftBtnText="Custom order" rightBtnText="Existing Inventory" />
        <HomeSection title="Lowest Cost Solar Panels in America" desc="Money-back guarantee" img="solar-panel.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
        <HomeSection title="Solar for New Roofs" desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels" img="solar-roof.jpg" leftBtnText="Order Now" rightBtnText="Learn More" />
        <HomeSection title="Accessories" img="accessories.jpg" leftBtnText="Shop Now" />
        <Footer />
      </div>
    </>
  );
}

export default Home;

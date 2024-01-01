import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="foot-container">
      <div className="menu">
        <NavLink to="/#" className="foot-link">
          Tesla &copy; 2021
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Privacy & Legal
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Contact
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Careers
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Get Newsletter
        </NavLink>
        <NavLink to="/#" className="foot-link">
          News
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Forums
        </NavLink>
        <NavLink to="/#" className="foot-link">
          Locations
        </NavLink>
      </div>
    </div>
  );
}

export default Footer;

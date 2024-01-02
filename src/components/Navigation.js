import React, { useState } from "react";
import "../css/Navigation.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <>
      <div className="nav-container">
        <a href="" title="Tesla Inc.">
          <img className="logo" src="/images/logo.svg" />
        </a>
        <div className="menu">
          <NavLink to="/ModelS" className="nav-link">
            Model S
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Model 3
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Model X
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Model Y
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Solar Roof
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Solar Panels
          </NavLink>
        </div>
        <div className="right-menu">
          <NavLink to="/#" className="nav-link">
            Shop
          </NavLink>
          <NavLink to="/#" className="nav-link">
            Tesla Account
          </NavLink>
          <MenuIcon onClick={() => setBurgerStatus(true)} />
        </div>
        <div className="burger-nav" style={{ transform: burgerStatus ? "translateX(0%)" : "translateX(100%)" }}>
          <div className="close-burger-wrap">
            <CloseIcon className="close-burger-btn" onClick={() => setBurgerStatus(false)} />
          </div>
          <li className="burger-nav-link">
            <NavLink to="/#">Existing Inventory</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Used Inventory</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Trade-In</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">CyberTruck</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">RoadSter</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Semi</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Charging</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">PowerWall</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Commercial Energy</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Utilies</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Test Drive</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Find Us</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">Support</NavLink>
          </li>
          <li className="burger-nav-link">
            <NavLink to="/#">India</NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navigation;

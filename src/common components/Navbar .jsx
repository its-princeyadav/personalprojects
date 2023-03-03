import React, { useState } from "react";
import Logo from "../../src/asests/images/marvel1.png";
import Hamburger from "../asests/images/more.png";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <nav className="main-nav">
      {/* 1st logo part  */}
      <div className="logo">
        <img className="logo-child" src={Logo} alt="" />
      </div>
      {/* hamburget menu start  */}

      <div
        className="hamburger-menu"
        onClick={() => setShowMediaIcons(!showMediaIcons)}
      >
        <img src={Hamburger} alt="" />
      </div>
      {/* 2nd menu part  */}
      <div
        className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}
      >
        <ul className="nav-link-wrapper">
          <li className="nav-item">
            <NavLink className="nav-item-div home-active" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <a className="nav-item-div" href="#">
              Our Business
            </a>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-item-div" to="/Aboutpage">
              About Us
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-item-div" to="/Contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item ">
            <a className="nav-item-div" href="#">
              Career
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

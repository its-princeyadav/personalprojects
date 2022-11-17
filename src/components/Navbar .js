import React, { useState } from "react";
import Logo from "../../src/asests/images/Bneed-logo.png";
import Hamburger from "../asests/images/more.png";
import "./navbar.scss";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav ">
        {/* logo part  */}
        <div className="logo-div">
          <img src={Logo} alt="" />
        </div>
        <div className="ham-div">
          <img
            onClick={() => setShowMediaIcons(!showMediaIcons)}
            src={Hamburger}
            alt=""
          />
        </div>
        <div className="nav-link mobile-nav-link">
          <ul className="nav-link-wrapper inline">
            <li className="nav-item">
              <a className="nav-item-div" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-div" href="#">
                Our Business
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-div" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-div" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-div" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="project-navbar">
        <input type="checkbox" id="check" />
        <label htmlFor="check" id="checkbtn">
          <img src={Hamburger} alt="" />
        </label>
        <label className="logo-div">
          <img src={Logo} alt="" />
        </label>
        <ul className="project-function">
          <li className="home-button">Home </li>
          <li>Our Business</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Career</li>
        </ul>
      </nav> */}
    </div>
  );
};

export default Navbar;

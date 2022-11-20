import React, { useState } from "react";
import Logo from "../../src/asests/images/Bneed-logo.png";
import Hamburger from "../asests/images/more.png";
import "./navbar.scss";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={Logo} alt="" />
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
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul className="nav-link-wrapper">
            <li className="nav-item">
              <a className="nav-item-div home-active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-item-div" href="#">
                Our Business
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-item-div" href="#">
                About Us
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-item-div" href="#">
                Contact Us
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-item-div" href="#">
                Career
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

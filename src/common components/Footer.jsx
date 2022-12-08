import React from "react";
import "./footer.scss";
import Logo from "../asests/images/Bneed-logo-2.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-footer-container">
        <div className="first-iner-container">
          <div className="logo-div-container-wrapper">
            <div className="logo-img-wrapper">
              <img src={Logo} alt="" />
            </div>
            <div className="logo-content-wrapper">
              <p className="logo-name">B-need</p>
              <p className="mini-heading">Endless & Beyond</p>
            </div>
          </div>
          <p className="mt25 bneed-footer-text">
            Bneed Learning Management System is designed to help institutions
            operate more efficiently. It is loaded with features for institutes
            to ensure flawless academic and administrative activities.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;

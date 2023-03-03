import React from "react";
import "./footer.scss";
import Logo from "../asests/images/marvel2.png";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="inner-footer-container">
        <div className="first-iner-container">
          <div className="logo-div-container-wrapper">
            <div className="logo-img-wrapper">
              <img className="logo-div" src={Logo} alt="" />
            </div>
            <div className="logo-content-wrapper">
              <p className="logo-name">MARVELS</p>
              <p className="mini-heading">Lets Have Some Thunder </p>
            </div>
          </div>
          <p className="mt25 bneed-footer-text">
            Marvels app is used to make entertainment of all over the world its
            gives many super heroes to all over the world they save whole wolrd
            {/* Bneed Learning Management System is designed to help institutions
            operate more efficiently. It is loaded with features for institutes
            to ensure flawless academic and administrative activities. */}
          </p>
        </div>
        <div className="second-inner-container">
          <p className="company-first-heading">Company</p>
          <p>Thor </p>
          <p>Locky</p>
          <p>IronMan </p>
        </div>
        <div className="quick-link-container second-inner-container">
          <p className="company-first-heading">Quick Links</p>
          <p>Careers</p>
          <p>About us</p>
          <p>Contact</p>
          <p>Our Team</p>
        </div>
        <div className="social-links-container">
          <p>Soical</p>
          <div className="social-links-wrapper">
            <i className="fb ed-icon"></i>
            <i className="twitter ed-icon"></i>
            <i className="insta ed-icon"></i>
          </div>
        </div>
      </div>
      <div className=" bottom-container-wrapper">
        <hr />
        <div className="bottom-container w-100 mt25 inline-between">
          <div className="inline-between w-40  left-item-wrapper">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Sitemap</p>
          </div>
          <div className="right-item-wrapper">
            <p>Desined By @Aditya Singh </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

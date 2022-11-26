import React from "react";
import "./firstfold.scss";
// partners image
import Image1 from "../asests/images/Image-1.png";
import Partner1 from "../asests/images/partner1.png";
import Partner2 from "../asests/images/partner2.png";
import Partner3 from "../asests/images/partner3.png";
import Partner4 from "../asests/images/partner4.png";
import Partner5 from "../asests/images/partner5.png";
import Partner6 from "../asests/images/partner6.png";
const Firstfold = () => {
  return (
    <div className="container">
      <div className="body-main-container mt1">
        <div className="top-container">
          <div className="left-body-conatiner">
            <p className="bneed-heading-2">BNEED</p>
            <p className=" big-heading-bneed ">
              A New Era Of Our Digital Business Platform
            </p>
            <p className="container-item-2 mt15 text-xxs ">
              We work with you to transform your organization, driving bold
              ideas and pragmatic solutions.
            </p>
            <button className=" contact-us-btn  ">CONTACT US</button>
          </div>
          <div className="right-body-conatiner">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="partner-container  inline-between">
          <div>
            <img src={Partner1} alt="" />
          </div>
          <div>
            <img src={Partner2} alt="" />
          </div>
          <div>
            <img src={Partner3} alt="" />
          </div>
          <div>
            <img src={Partner4} alt="" />
          </div>
          <div>
            <img src={Partner5} alt="" />
          </div>
          <div>
            <img src={Partner6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstfold;

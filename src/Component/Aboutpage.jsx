import React from "react";
import "./aboutpage.scss";
import Aboutimg from "../asests/images/aboutpage.png";
const Aboutpage = () => {
  return (
    <div className="about-page">
      <div className="about-first-container-wrapper">
        <p className="big-heading-bneed text-center">About us</p>
        <div className="about-img-item-wrapper inline">
          <div className="left-container">
            <div className="aboutpage-img">
              <img src={Aboutimg} alt="" />
            </div>
          </div>

          <div className="about-right-container-wrapper">
            <p className="text-xs w600   pt50">WHO WE ARE</p>
            <p className="pt15 mid-headig">We’re a </p>
            <p className=" mid-headig"> team of creator & innovators </p>
            <p className="right-last-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
          </div>
        </div>
        <p className="big-heading-bneed text-center value-heading">
          Our Values
        </p>
        <div className="about-img-item-wrapper inline">
          <div className="right-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

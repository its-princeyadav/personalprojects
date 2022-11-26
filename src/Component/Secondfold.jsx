import React from "react";
import "./secondfold.scss";
import Pic1 from "../asests/images/office1.png";
const secondfold = () => {
  return (
    <div className="container">
      {/* <div className="second-main-container ">
        <p className="text-center w600 mt50 our-bussiness-heading gradiant-word-2">
          Our Business
        </p>
        <p className="text-center mb50 w600 gradiant-word-2 our-bussiness-heading">
          Verticals
        </p>
        <div className="organisation-info-item">
          <div className="left-organisation-container">
            <p className="bussiness-heading-item">
              <span className="bussiness-count gradiant-word-1 w400"> 01.</span>
              <span className="w500 bussiness-subheading"> Edneed </span>
            </p>
            <p className="bussiness-content text-s w500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="mt25 visit-btn"> VISIT NOW </button>
          </div>
          <div className="divider-line"></div>
          <div className="right-organisation-container">
            <div className="image-div-wrapper">
              <img src={Pic1} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="second-main-container ">
        <p className="text-center w600 mt50 our-bussiness-heading gradiant-word-2">
          Our Business
        </p>
        <p className="text-center w600 our-bussiness-heading gradiant-word-2">
          Verticals
        </p>
        <div className="organisation-info-container mt50">
          <div className="company-info-container">
            <p className="bussiness-heading-item">
              <span className="gradiant-word-1 w400 count">01.</span>
              <span className=" office-name w500 pl15">Edneed</span>
            </p>
            <p className="bussiness-content text-s  w500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="divider-line"></div>
          <div className="company-image-container">
            <div className="company-image-item text-center">
              <img src={Pic1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondfold;

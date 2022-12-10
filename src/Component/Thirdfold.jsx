import React from "react";
import "./thirdfold.scss";
const Thridfold = () => {
  return (
    <div className="inline form-third-main-container w-100 ">
      <div className="third-left-container w-50">
        <div className="inner-wrapper">
          <p className="text-xs w500">CAREER</p>
          <p className="big-heading">Join Our Team</p>
          <p className="mt15">
            Lorem Ipsum is simply dummy text of the printing is a big
            typesetting industry. Lorem Ipsum has been the .
          </p>
        </div>
        <button className="arrow-button">
          <i className="right-arow "></i>
        </button>
      </div>
      <div className="third-right-container w-50">
        <p className="text-xs w500">NEWSLETTER</p>
        <p className="big-heading">Subscribe us</p>
        <p className="mt15">Subscribe to our newsletter and stay updated</p>
        <div className="search-bar-btn-wrapper">
          <input
            className="emial-search-bar"
            type="text"
            placeholder="Enter a vaild email id"
          />
          <button className="gradiant-btn">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default Thridfold;

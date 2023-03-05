import React from "react";
import "./secondfold.scss";
import Pic1 from "../asests/images/thor.jfif";
import Pic2 from "../asests/images/ironman.jfif";
import Pic3 from "../asests/images/spiderman.jfif";
const secondfold = () => {
  return (
    <div className="container">
      <div className="second-main-container ">
        <p className="text-center w600 mt50 our-bussiness-heading gradiant-word-2">
          Our Famous
        </p>
        <p className="text-center w600 our-bussiness-heading gradiant-word-2">
          Movies
        </p>
        <div className="organisation-info-container mt50">
          <div className="company-info-container">
            <p className="bussiness-heading-item">
              <span className="gradiant-word-1 w400 count">01.</span>
              <span className=" office-name w500 pl15">Spider Man </span>
            </p>
            <p className="bussiness-content text-s  w500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
              dorganisation-info-container-mobileummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
            <button className="contact-us-btn ">VISIT NOW</button>

            <div className="image-wrapper">
              <div className="image-item">
                <img src={Pic1} alt="" />
              </div>
            </div>
            <p className="bussiness-heading-item">
              <span className="gradiant-word-1 w400 count">03.</span>
              <span className=" office-name w500 pl15">Iron man </span>
            </p>
            <p className="bussiness-content text-s  w500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button className="contact-us-btn ">VISIT NOW</button>
          </div>

          <div className="divider-line"></div>
          <div className="compnay-second-container">
            <div className="image-wrapper">
              <div className="image-item">
                <img src={Pic3} alt="" />
              </div>
            </div>
            <p className="bussiness-heading-item">
              <span className="gradiant-word-1 w400 count">02.</span>
              <span className=" office-name w500 pl15">Thor</span>
            </p>
            <p className="bussiness-content text-s  w500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <div className="image-wrapper">
              <div className="image-item">
                <img src={Pic2} alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* mobile version of this container */}
        <div className="organisation-info-container-mobile">
          {/* edneed  */}
          <p className="bussiness-heading-item">
            <span className="gradiant-word-1 w400 count">01.</span>
            <span className=" office-name w500 pl15">Thor</span>
          </p>
          <p className="bussiness-content-mobile">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="contact-us-btn ">VISIT NOW</button>
          <div className="image-wrapper mt15">
            <div className="image-item">
              <img src={Pic1} alt="" />
            </div>
          </div>
          {/* webneed  */}
          <p className="bussiness-heading-item">
            <span className="gradiant-word-1 w400 count">02.</span>
            <span className=" office-name w500 pl15">Spider Man</span>
          </p>
          <p className="bussiness-content-mobile">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="contact-us-btn ">VISIT NOW</button>
          <div className="image-wrapper mt15">
            <div className="image-item">
              <img src={Pic3} alt="" />
            </div>
          </div>
          {/* brandneed  */}
          <p className="bussiness-heading-item">
            <span className="gradiant-word-1 w400 count">03.</span>
            <span className=" office-name w500 pl15">Iron man</span>
          </p>
          <p className="bussiness-content-mobile">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="contact-us-btn ">VISIT NOW</button>
          <div className="image-wrapper mt15">
            <div className="image-item">
              <img src={Pic2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default secondfold;

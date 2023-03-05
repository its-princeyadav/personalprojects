import React from "react";
import "./contact.scss";
const Contact = () => {
  return (
    <div className="Contact-us ">
      <div className="contact-us-container">
        <p className="gradiant-word-2  contact-us-heading text-center">
          Contact us
        </p>
        <div className="address-wrapper-container">
          <div className="address-container">
            <p className="w600 text-md office-haeding  ">USA Office</p>
            <p className="mt8 text-xxs "> (+91)-8368214889</p>
            <p className="mt8 text-xs office-haeding  ">
              203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309
            </p>
          </div>
          <div className="address-container">
            <p className="w600 text-md office-haeding  ">Noida Office</p>
            <p className="mt8 text-xxs "> (+91)-8368214889</p>
            <p className="mt8 text-xs office-haeding  ">
              203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309
            </p>
          </div>
          <div className="address-container">
            <p className="w600 text-md office-haeding  ">Manipur Office</p>
            <p className="mt8 text-xxs"> (+91)-8368214889</p>
            <p className="mt8  text-xs  office-haeding ">
              203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309
            </p>
          </div>
        </div>
        <div className="inline map-form-main-wrapper ">
          <div className="map-div">
            <iframe
              className="main-map"
              src="https://www.google.com/maps/embed"
              width="600"
              height="600"
            ></iframe>
          </div>
          <div className="main-right-form">
            <p className="text-md w500 office-haeding">Track US </p>
            <div className="form-right-body  pt35">
              <p className="text-xs w400">Name</p>
              <input
                type="text"
                className=" p5 name-form-place"
                name=""
                id=""
              />
              <p className="text-xs pt35 w400">Phone Number</p>
              <input
                type="text"
                className=" p5 name-form-place"
                name=""
                id=""
              />
              <p className="text-xs pt35 w400">Email id (Optional)</p>
              <input
                type="text"
                className=" p5 name-form-place"
                name=""
                id=""
              />
              <p className="text-xs pt35 w400">Message</p>
              <input
                type="text"
                className=" p5 name-form-place"
                name=""
                id=""
              />
              <button className="gradiant-btn "> Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

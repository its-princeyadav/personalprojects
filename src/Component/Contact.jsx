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
            <p className="w600 text-md  ">USA Office</p>
            <p className="mt8"> (+91)-8368214889</p>
            <p className="mt8">
              203, Tower C, Ithum Towers, Sector 62, Noida, Uttar Pradesh 201309
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

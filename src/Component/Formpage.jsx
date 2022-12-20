import React from "react";
import "./formpage.scss";
const Formpage = () => {
  return (
    <div className="container">
      <div className="form-body-main-container">
        <div className="form-left-body">
          <p className="form-contact-heading">CONTACT</p>
          <p className="form-contact-big-heading">GET IN TOUCH</p>
          <p className="mt15">
            Question not answered yet? We are here to help!
          </p>
          <div className="contact-link-wrapper">
            <i className="ed-icon phone"></i>
            <p>
              <a href="">+91-8700105214</a>
            </p>
          </div>
          <div className="contact-link-wrapper">
            <i className="ed-icon mail"></i>
            <p>
              <a href="">princeyadav14022002@gmail.com</a>
            </p>
          </div>
          <div className="contact-link-wrapper">
            <i className="ed-icon location"></i>
            <p className="location-div">
              <a href="">
                Addess - 203, Tower C, Ithum Towers, Sector 62, Noida, Uttar
                Pardesh 201309
              </a>
            </p>
          </div>
        </div>
        <div className="form-right-body">
          <p className="text-xs w400">Name</p>
          <input type="text" className=" p5 name-form-place" name="" id="" />
          <p className="text-xs pt35 w400">Phone Number</p>
          <input type="text" className=" p5 name-form-place" name="" id="" />
          <p className="text-xs pt35 w400">Email id (Optional)</p>
          <input type="text" className=" p5 name-form-place" name="" id="" />
          <p className="text-xs pt35 w400">Message</p>
          <input type="text" className=" p5 name-form-place" name="" id="" />
          <button className="gradiant-btn "> Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Formpage;

import React from "react";
import "./aboutpage.scss";
import Aboutimg from "../asests/images/aboutpage.png";
import About1 from "../asests/images/aboutpage1.png";
import Raj from "../asests/images/raj.png";
import Saranjeet from "../asests/images/saranjeet.png";
import Jarnail from "../asests/images/jarnail.png";
import Harpret from "../asests/images/harpreet.png";
import Mahima from "../asests/images/mahima.png";
import Imgcomp from "./Imgcomp";
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
        <div className="about-img-item-wrapper-2  inline">
          <div className="left-container-wrapper">
            <p className="left-item-heading">Integrity</p>
            <p className="mt20 left-item-content text-xs w400 mb50  ">
              Honesty is the best policy. At Edneed, we believe that one should
              observe honesty with their work, peers, society but most
              importantly themselves. Because it is us who are most affected by
              our actions.
            </p>
            <p className="left-item-heading">Equality</p>
            <p className="mt20 left-item-content text-xs w400 mb50  ">
              We believe that the greatest privilege in life is to have access
              to an exemplary mentor. Edneed is our step towards making the
              world a level plain field, as quality education is fundamental to
              development.
            </p>
            <p className="left-item-heading">Selfless service</p>
            <p className="mt20 left-item-content text-xs w400 mb50  ">
              We are dedicated to giving back to our society through the medium
              of education. By making knowledge accessible, finding
              opportunities easier and empowering educational institutes with
              tools that will take them to the next level.
            </p>
          </div>
          <div className="right-container-wrapper">
            <div className="right-img-wrapper">
              <img src={About1} alt="" />
            </div>
          </div>
        </div>
        <div className="our-team-wrapper">
          <p className="big-heading-bneed  text-center ">Meet our team</p>
          <p className="text-center team-content ">
            Our philosophy is simple - hire a team of diverse, passionate people
            and foster a culture that empowers you to do you best work
          </p>
          <div className="team-members-img-wrapper inline">
            <Imgcomp
              imgsrc={Saranjeet}
              Name="Saranjeet Singh"
              Dezignation="CEO & FOUNDER"
            />
            <Imgcomp
              imgsrc={Raj}
              Name="Raj Malhotra"
              Dezignation="MARKETING HEAD"
            />
            <Imgcomp
              imgsrc={Jarnail}
              Name="Jarnail Singh"
              Dezignation="BOARD OF ADVISOR"
            />
            <Imgcomp
              imgsrc={Harpret}
              Name="Harpreet Kaur"
              Dezignation="IT HEAD"
            />
            <Imgcomp
              imgsrc={Mahima}
              Name="Mahima Anand"
              Dezignation="DIRECTOR OF BUSINESS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

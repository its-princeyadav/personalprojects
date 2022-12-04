import React from "react";
import Slider from "react-slick";
import "./slickslider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// images \
import Image1 from "../asests/images/slider1.png";
const Slickslider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
        <div className="card-container-wrapper">
          <div className="card-container-item p35">
            <div className="slider-image-container">
              <img src={Image1} alt="" />
            </div>
            <p className="text-xs w700 text-center mt25">Charles Patterson</p>
            <p className="text-xs w400 text-center paypal-heading mt5">
              Paypal
            </p>
            <p className="mt35 paypal-heading">
              This is a testimonial. Editing your testimonial is easy. Simply
              highlight the text and replace it with your own.Simply highlight
              the text and replace it with your
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Slickslider;

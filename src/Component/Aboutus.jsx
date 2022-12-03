import React from "react";
import "./aboutus.scss";
const Aboutus = () => {
  return (
    <div className="container ">
      <div className="third-main-container">
        <p className="gradiant-word-2 text-center w600 about-us-heading">
          About us
        </p>
        <p className="aboutus-content text-s mt15 text-center ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.{" "}
        </p>
        <p className="gradiant-word-2 text-center about-us-heading w600  stisfied-heading">
          Our Stisfied
        </p>
        <p className="gradiant-word-2 text-center  about-us-heading w600 mb50">
          Customers
        </p>
      </div>
    </div>
  );
};

export default Aboutus;

import React from "react";

import "./imgcomp.scss";
export default function Imgcomp(props) {
  return (
    <div>
      <img className="card-image" src={props.imgsrc} alt="wflk" />
      <p className="text-center mt20 w600 text-sm">{props.Name} </p>
      <p className="text-center text-xxs dezginaton-div ">
        {props.Dezignation}
      </p>
    </div>
  );
}

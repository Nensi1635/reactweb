import React from "react";
import "./doubleimage.scss";

export default function DoubleImageSec(props) {
  return (
    <div className="container">
      <div
        className="image-grid  animate__animated animate__fadeInDown wow" data-wow-offset="200">
        <div className="image-grid-item">
          <div className="first-image">
            <img src={props.firstimg} alt="imag" />
          </div>
        </div>
        <div className="image-grid-item">
          <div className="second-image">
            <img src={props.secondimg} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
}

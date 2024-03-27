import React from "react";
import "./herobanner.scss";
import arrowIcon from "../../../assets/images/scrollDown.svg";

export default function Herobanner(props) {
  console.log("eygfyxm " , props);
  return (
    <div>
      <div className="img-contain-sec">
        <div className="img-sec">
          <img src={props.img} alt="imag" />
        </div>
        <div className="blur-div"></div>
        <div className="inner-text-div animate__animated animate__slideInUp">
          <p>{props.firsttext}</p>
          <div className="fonth1">
            <span>{props.head}</span>
          </div>
          <div className="fontp">
            <p>{props.text}</p>
          </div>
        </div>
        <div className="Arrow-container">
          <div className="arrow-line-div"></div>
          <div className="cross-img-div">
            <img src={arrowIcon} alt="arrow img" />
          </div>
        </div>
      </div>
    </div>
  );
}

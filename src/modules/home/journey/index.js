import React from "react";

import "./journey.scss";
export default function Journey(props) {
  return (
    <div>
      <div className="journey-sec">
        <div className="container">
          <div className="img-continer">
            <img src={props.img} alt="team image" />
            <div className="blur-div"></div>
            <div
              className="text animate__animated  animate__slideInLeft wow"
              data-wow-offset="200"
            >
              <div className="text-div-journy ">
                <div className="fonth1">
                  <span>{props.head}</span>
                </div>
                <div className="fontp">
                  <p>{props.text}</p>
                </div>
                <p>{props.extratext}</p>
                <div className={props.display}>
                  <div className="fill-button">
                    <button className="button-white">{props.btn}</button>
                  </div>
                </div>
                <div className="italic-text  ">
                  <div className={props.display}>
                    <p>
                      By clicking submit, you are requesting to receive
                      marketing communications from Kerzner International. You
                      agree to our
                      <span> Terms and Conditions</span> and confirm that you
                      have read and understood the <span>Privacy Policy</span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./from.scss";

export default function Form(props) {
  return (
    <div className="form-sec">
      <div className="form-title">
        <div className="container">
          <div className="title-text">
            <h2>{props.head}</h2>
            <div className="text">
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="form-design">
        <div className="container">
          <div className="form-grid">
            <div className="form-grid-item">
              <label>First Name*</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-grid-item">
              <label>Last Name*</label>
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="form-grid-item">
              <label>Email*</label>
              <input type="text" placeholder="Email" />
            </div>
            <div className="form-grid-item">
              <label>Phone*</label>
              <input type="text" placeholder="Phone" />
            </div>
          </div>
          <p>
            By clicking submit, you are requesting to receive marketing
            communications from Kerzner International. You agree to our
            <span> Terms and Conditions</span> and confirm that you have read
            and understood the <span>Privacy Policy</span>.
          </p>
          <div className="fill-button btn-container">
            <button className="button-green">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

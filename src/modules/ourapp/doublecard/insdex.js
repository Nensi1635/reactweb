import React from "react";
import "./doublecard.scss";
export default function DoubleCard(props) {
  return (
    <div className="container">
      <div className="card-grid">
        <div className="card-grid-item">
          <div className="image-contain">
            <img src={props.firstimg} alt="image" />
          </div>
          <div className="text-card">
            <h3>{props.Fhead}</h3>
            <div className="text">
              <p>{props.Ftext}</p>
            </div>
          </div>
        </div>
        <div className="card-grid-item">
          <div className="image-contain">
            <img src={props.secondimg} alt="image" />
          </div>
          <div className="text-card">
            <h3>{props.Shead}</h3>
            <div className="text">
              <p>{props.Stext}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

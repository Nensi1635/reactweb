import React from "react";
import "./title.scss";

export default function Title(props) {
  return (
    <div
      className="title-sec animate__animated animate__slideInDown wow"
      data-wow-offset="200"
    >
      <div className="container">
        <h2>{props.head}</h2>
        <div className="text-p">
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

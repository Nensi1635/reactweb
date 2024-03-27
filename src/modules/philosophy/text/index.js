import React from "react";
import "./text.scss";
export default function Text(props) {
  return (
    <div className="text-sec animate__animated animate__slideInDown wow" data-wow-offset="200">
      <div className="container">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

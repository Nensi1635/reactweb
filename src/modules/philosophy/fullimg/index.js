import React from "react";
import "./fullimg.scss";


export default function FullImage(props) {
  return (
    <div className="full-screen-img">
      <div className="full-img">
        <img src={props.img} alt="image" />
      </div>
    </div>
  );
}

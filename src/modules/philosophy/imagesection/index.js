import React from 'react'
import "./imagesec.scss";

export default function ImageSection(props) {
  return (
    <div className='image-sec'>
      <div className="container">
        <div className="image-container">
          <img src={props.img} alt="image" />
        </div>
      </div>
    </div>
  );
}

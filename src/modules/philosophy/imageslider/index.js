import React from "react";
import Slider from "react-slick";
import "./imageslider.scss";
import fitnesscard1 from "../../../assets/images/Fitness Carsoule Card 2.webp";
import fitnesscard2 from "../../../assets/images/Fitness Carsoule Card 5.webp";

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerPadding: "60px",
    centerMode: true,
    className: "center",
  };
  
  return (
    <div className="image-slider">
      <div className="slider-container">
        <Slider {...settings}>
        
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
          <div>
            <div className="image-contaier">
              <img src={fitnesscard1} alt="image" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

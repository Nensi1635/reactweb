import React from "react";
import Slider from "react-slick";
import journal1 from "../../../assets/images/Journal1.jpg";
import journal2 from "../../../assets/images/Journal2.jpg";
import journal3 from "../../../assets/images/Journal3.jpg";
import journal4 from "../../../assets/images/journal4.webp";
import journal5 from "../../../assets/images/journal5.webp";
import "./journal.scss";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className="Arrow-left" onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className="Arrow-right" onClick={onClick} />;
}

export default function Journal(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="container">
        <div className="journal-sec-title">
          <div className="fonth1">
            <span>{props.head}</span>
            <p>1 / 1</p>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal1} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal2} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal3} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal4} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal5} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
          <div>
            <div className="card">
              <div className="card-img">
                <img src={journal3} alt="journal related images" />
              </div>
              <div className="fontp">
                <p>SIRO CAMPAIGN</p>
              </div>
              <div className="cardfont-span">
                <span>In conversation: Jonah Kest</span>
              </div>
              <div className="card-btn">
                <button>READ MORE</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

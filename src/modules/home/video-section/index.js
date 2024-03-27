import React from "react";
import "./videosection.scss";
import fistVideo from "../../../assets/video/_SIRO HOME PAGE BG 1920x1080.mp4";
import arrowIcon from "../../../assets/images/scrollDown.svg";
import Secondvideo from "../../../assets/video/_SIRO ONE ZAABEEL BG 1920x1080.mp4";
import teamvideo from "../../../assets/video/siro-team-video.mp4";
import lastvideo from "../../../assets/video/siro-boka-place-main.mp4";
import playicon from "../../../assets/images/playButton.svg";
export default function VideoSection() {
  return (
    <div>
      <section>
        <div className="video-contain-sec fist-video-sec">
          <div className="video-sec">
            <video autoPlay>
              <source src={fistVideo} />
            </video>
            <div className="pause-button">
              <img src={playicon} alt="play-button" />
            </div>
          </div>
          <div className="inner-text-div animate__animated animate__slideInUp">
            <div className="fonth1">
              <span>A new immersive lifestyle destination</span>
            </div>
            <div className="fontp">
              <p>
                Experience the future of fitness and recovery at SIRO hotels.
                Opening soon.
              </p>
            </div>
            <div className="fill-button">
              <button className="button-white">LEARN MORE</button>
            </div>
          </div>
          <div className="Arrow-container">
            <div className="arrow-line-div"></div>
            <div className="cross-img-div">
              <img src={arrowIcon} alt="arrow img"></img>
            </div>
          </div>
        </div>
        <div className="video-contain-sec">
          <div className="video-sec">
            <video autoPlay>
              <source src={Secondvideo} />
            </video>
            <div className="pause-button">
              <img src={playicon} alt="play-button" />
            </div>
          </div>
          <div
            className="inner-text-div animate__animated animate__slideInUp wow "
            data-wow-offset="200"
          >
            <div className="span-text">
              <span>OUR DESTINATIONS</span>
            </div>
            <div className="fonth1">
              <span>SIRO One Za’abeel, Dubai</span>
            </div>
            <div className="fontp">
              <p>
                Dubai’s first fully integrated fitness + recovery hotel. Opening
                soon.
              </p>
            </div>
            <div className="fill-button outline-button">
              <button className="outline-white">EXPLORE</button>
            </div>
          </div>
        </div>
        <div className="video-contain-sec">
          <div className="video-sec">
            <video autoPlay>
              <source src={teamvideo} />
            </video>
            <div className="pause-button">
              <img src={playicon} alt="play-button" />
            </div>
          </div>
          <div
            className="inner-text-div animate__animated animate__slideInUp wow "
            data-wow-offset="200"
          >
            <div className="span-text">
              <span>TEAM SIRO</span>
            </div>
            <div className="fonth1">
              <span>Powered by champions</span>
            </div>
            <div className="fontp">
              <p>
                Train, recover and fuel your body like the sporting elite. Every
                element of your SIRO stay has been built with first-hand insight
                from Team SIRO, an international collective of renowned athletes
                and international wellness specialists.
              </p>
            </div>
            <div className="fill-button outline-button">
              <button className="outline-white">MEET TEAM SIRO</button>
            </div>
          </div>
        </div>
        <div className="video-contain-sec">
          <div className="video-sec">
            <video playsInline loop>
              <source src={lastvideo} />
            </video>
            <div className="pause-button">
              <img src={playicon} alt="play-button" />
            </div>
          </div>
          <div
            className="inner-text-div animate__animated animate__slideInUp wow"
            data-wow-offset="200"
          >
            <div className="span-text">
              <span>OUR DESTINATIONS</span>
            </div>
            <div className="fonth1">
              <span>SIRO Boka Place, Montenegro</span>
            </div>
            <div className="fontp">
              <p>
                Experience a haven of nature, adventure and wellbeing at this
                coastal SIRO destination. Opening in 2024.
              </p>
            </div>
            <div className="fill-button outline-button">
              <button className="outline-white">EXPLORE</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

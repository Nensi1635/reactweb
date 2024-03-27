import React from "react";
import "./clubsec.scss";
import membershipicon from "../../../assets/icons/Membership.svg";
import siroicon from "../../../assets/icons/SIRO.svg";
export default function ClubSec() {
  return (
    <div>
      <div className="club-sec">
        <div className="container">
          <div className="club-sec-grid">
            <div className="club-sec-grid-item">
              <div className="icon-div">
                <img src={membershipicon} alt="icone-membership" />
              </div>
              <div className="fonth1">
                <span>Become a SIRO member </span>
              </div>
              <div className="fontp">
                <p>
                  Join the SIRO club and unlock a range of exclusive fitness,
                  wellness and retail benefits.
                </p>
              </div>
              <div className="fill-button outline-button">
                <button className="outline-green">PRE-REGISTER NOW</button>
              </div>
            </div>
            <div className="club-sec-grid-item">
              <div className="icon-div">
                <img src={siroicon} alt="icone-membership" />
              </div>
              <div className="fonth1">
                <span>The SIRO app</span>
              </div>
              <div className="fontp">
                <p>
                  Plan your stay and explore fitness activities and recovery
                  treatments with a tap.
                </p>
              </div>
              <div className="fill-button outline-button">
                <button className="outline-green">COMING SOON</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

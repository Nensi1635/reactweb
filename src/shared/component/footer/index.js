import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="first-section">
            <div className="connected">
              <h5>Stay connected</h5>
              <div className="fill-button">
                <button className="button-white">SIGN-UP-NOW</button>
              </div>
            </div>
            <div className="footer-menu-container">
              <div className="menu-list">
                <div className="title">
                  <h5>Connect</h5>
                  <div className="icone-plus">
                    <span className="first-line"></span>
                    <span className="second-line first-line"></span>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    <a>Instagram</a>
                  </div>
                </div>
              </div>
              <div className="menu-list">
                <div className="title">
                  <h5>News</h5>
                  <div className="icone-plus">
                    <span className="first-line"></span>
                    <span className="second-line first-line"></span>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    <a>Media</a>
                  </div>
                </div>
              </div>
              <div className="menu-list">
                <div className="title">
                  <h5>Terms & Conditions</h5>
                  <div className="icone-plus">
                    <span className="first-line"></span>
                    <span className="second-line first-line"></span>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    <a>Website Terms</a>
                  </div>
                  <div className="list-item">
                    <a>Global Privacy Policy</a>
                  </div>
                  <div className="list-item">
                    {" "}
                    <a>Payment and Cancellation Policy</a>
                  </div>
                </div>
              </div>
              <div className="menu-list">
                <div className="title">
                  <h5>Kerzner</h5>
                  <div className="icone-plus">
                    <span className="first-line"></span>
                    <span className="second-line first-line"></span>
                  </div>
                </div>
                <div className="list">
                  <div className="list-item">
                    <a>Atlantis </a>
                  </div>
                  <div className="list-item">
                    <a>One&Only</a>
                  </div>
                  <div className="list-item">
                    <a>Rare Finds </a>
                  </div>
                  <div className="list-item">
                    <a>Careers</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="copy-right-text">
              <select className="language-select">
                <option>English</option>
              </select>
              <span>2024 © Kerzner International Limited. All Rights Reserved.</span>
            </div>
        </div>
      </footer>
    </div>
  );
}

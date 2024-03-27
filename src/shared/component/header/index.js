import React from "react";
import "./header.scss";
import logo from "../../../assets/logos/SIROlogo.svg";
import destination1 from "../../../assets/images/dstination1.jpg";

export default function Header() {
  return (
    <div>
      <header>
        <nav>
          <div className="nav-assistant">
            <div className="header-alignment">
              <div className="mobile-menu">
                <div className="line top"></div>
                <div className="line middle"></div>
                <div className="line bottom"></div>
              </div>
              <div className="menulist-first">
                <div className="destination">
                  <a href="/destinations">Destinations</a>
                  <div className="header-submenu">
                    <div className="submenu-container">
                      <div className="destination-grid">
                        <div className="destination-grid-item">
                          <div className="destination-img">
                            <img src={destination1} alt="destination image" />
                          </div>
                          <div className="text-over-img">
                            <span>SIRO One Za’abeel, Dubai</span>
                          </div>
                        </div>
                        <div className="destination-grid-item">
                          <div className="destination-img">
                            <img src={destination1} alt="destination image" />
                          </div>
                          <div className="text-over-img">
                            <span>SIRO One Za’abeel, Dubai</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="/philosophy">Our Philosophy</a>
                </div>
                <div>
                  <a href="/journal">The Journal</a>
                </div>
                <div>
                  <a href="/our-app">Our App</a>
                </div>
              </div>
              <div className="logo">
                <a href="/">
                  <img src={logo} alt="logo" />
                </a>
              </div>
              <div className="menulist-last">
                <div className="menulist-first">
                  <a href="/membership">Membership</a>
                  <a href="/stay-connected">Stay Connected</a>
                  <a href="/contact-us">Contact Us</a>
                </div>
                <div className="fill-button">
                  <button className="button-white">BOOK</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

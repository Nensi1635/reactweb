import React from "react";
import phone from "../../../assets/icons/phone_icon.svg";
import email from "../../../assets/icons/email_icon.svg";
import "./twocard.scss";
export default function TwoCrad() {
  return (
    <div>
      <div className="twocard">
        <div className="card">
          <div className="card-inform">
            <div className="img-container">
              <img src={phone} alt="image" />
            </div>
            <h2>Call us</h2>
            <p>
              Call us General enquiries:<span> +971 4 666 1717</span>
            </p>
            <p>
              Room bookings: <span>+971 4 666 1700</span>
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-inform">
            <div className="img-container">
              <img src={email} alt="image" />
            </div>
            <h2>Send us an email</h2>
            <p>
              <span>info.onezaabeel@sirohotels.com</span>
            </p>
          </div>
        </div>
      </div>

      <div className="i-frame-sec">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.2699926266114!2d55.2903888!3d25.227829699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f42d6f522d169%3A0x18b2c982ea98d0c1!2sSIRO%20One%20Za&#39;abeel!5e0!3m2!1sen!2sin!4v1709377306027!5m2!1sen!2sin"
         
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

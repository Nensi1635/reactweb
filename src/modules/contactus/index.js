import React from "react";
import Herobanner from "../destination/herobanner";
import maountain from "../../assets/images/mountains.webp";
import TwoCrad from "./twocard";
export default function ContactUs() {
  return (
    <div>
      <Herobanner
        img={maountain}
        head="Contact us"
        text="Got questions? Connect with our team today."
      />
      <TwoCrad />
    </div>
  );
}

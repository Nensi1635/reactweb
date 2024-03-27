import React from "react";
import Herobanner from "../destination/herobanner";
import image1 from "../../assets/images/siro-montenegro-cycling.webp";
import Form from "../membership/form";
export default function StayConnected() {
  return (
    <div>
      <Herobanner
        img={image1}
        head="Stay connected"
        text="Keep up with the latest SIRO news and updates."
      />
      <Form
        head="Subscribe to our newsletter"
        text="Join the SIRO journey and be the first to receive updates on our hotels, programmes and more."
      />
    </div>
  );
}

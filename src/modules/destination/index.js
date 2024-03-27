import React from "react";

import Herobanner from "./herobanner";
import image1 from "../../assets/images/siro-montenegro-cycling.webp";
import Journey from "../home/journey";
import desti1 from "../../assets/images/dstination1.jpg";
import desti2 from "../../assets/images/desti2.jpg";

export default function Destination() {
  return (
    <div>
      <Herobanner
        img={image1}
        head="Our destinations"
        text="Located between cityscapes, coastlines and mountainous landscapes, SIRO hotels empower you to unlock your potential, no matter where you are."
      />
      <Journey
        img={desti1}
        head="SIRO One Za’abeel, Dubai"
        display="display"
        text="Dubai’s first fully integrated fitness + recovery hotel. Opening soon."
        btn="DISCOVER"
      />
      <Journey
        img={desti2}
        head="SIRO Boka Place, Montenegro"
        text="Experience a haven of nature, adventure and wellbeing at this coastal SIRO destination. Opening in 2024."
        btn="DISCOVER"
        display="display"
      />
    </div>
  );
}

import React from "react";
import Herobanner from "../destination/herobanner";
import journal from "../../assets/images/About Siro-Section journal img.webp";
import Text from "../philosophy/text";
import CradSection from "./card-section";

export default function TheJournal() {
  return (
    <div>
      <Herobanner
        img={journal}
        head="The Journal"
        text="The ultimate destination for SIRO's latest news and exclusive content."
      />
      <Text text="Welcome to The Journal, your portal into the world of SIRO. Discover in-depth insights into Team SIRO, dive into the latest SIRO news, and access exclusive content. Stay informed, stay inspired and stay connected with The Journal." />
      <CradSection />
    </div>
  );
}

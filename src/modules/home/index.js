import React from "react";
import VideoSection from "./video-section";
import ClubSec from "./clubsec";
import Journey from "./journey";
import Journal from "./journal";
import TeamImg from "../../assets/images/team img.webp";

export default function Home() {
  return (
    <div>
      <VideoSection />
      <ClubSec />
      <Journey
        img={TeamImg}
        btn="SIGN-UP NOW"
        head="Join Our journey"
        text=" Please sign up to join our collective global community of like-minded individuals"
      />
      <Journal head="SIRO Journal" />
    </div>
  );
}

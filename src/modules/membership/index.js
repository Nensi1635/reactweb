import React from "react";
import Herobanner from "../destination/herobanner";
import member from "../../assets/images/membership.jpg";
import Title from "../philosophy/title";
import teamimg from "../../assets//images/team img.webp";
import Journey from "../home/journey";
import Form from "./form";
import Journal from "../home/journal";

export default function Membership() {
  return (
    <div>
      <Herobanner
        img={member}
        head=" Join the SIRO Club"
        text="Start your journey to peak performance."
      />
      <Title
        head="A global wellness collective"
        text="Experience the SIRO movement and join a global collective of people dedicated to unlocking their full potential. Beyond connecting you with a dynamic community, our SIRO Club membership offers exclusive benefits that empower you to live without compromise."
      />
      <Journey
        img={teamimg}
        head="Become a SIRO Club member"
        text="Be among the first to join the SIRO Club and unlock exclusive fitness, recovery and retail benefits."
        display="display"
      />
      <Form
        head="Register for a SIRO membership"
        text="Sign up now for exclusive access and benefits."
      />
      <Journal
        head="

Featured membership benefits"
      />
    </div>
  );
}

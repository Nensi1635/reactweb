import React from "react";
import Herobanner from "../destination/herobanner";
import apphero from "../../assets/images/Our App-Hero Banner.jpg";
import appbanner from "../../assets/images/Download Our App-Banner.jpg";
import Title from "../philosophy/title";
import Journey from "../home/journey";
import DoubleCard from "./doublecard/insdex";
import sleep from "../../assets/images/sleepimg.webp";
import fitness from "../../assets/images/Content List Item-Fitness.webp";
import recovery from "../../assets/images/SIRO One Za'abeel.- Recovery Suite.webp";
import meditation from "../../assets/images/Meditation.webp";
import cycling from "../../assets/images/cycling-4944.webp";
import ImageSection from "../philosophy/imagesection";
import teamimg from "../../assets/images/team img.webp";
import Nutrition from "../../assets/images/nutrition.webp";

export default function OurApp() {
  return (
    <div>
      <Herobanner
        img={apphero}
        firsttext="COMMING SOON"
        head="The SIRO app"
        text="Discover the platform where hospitality meets total wellbeing."
      />
      <Title
        head="Curate your journey to wellbeing"
        text="The SIRO app is your portal to a seamlessly immersive experience across our destinations. Explore rooms, discover destination fitness, and personalise your stay with special meal plans, select fitness classes and recovery treatments – all in one place."
      />
      <Journey
        img={appbanner}
        head="Download the SIRO app"
        text="Join the future of fitness + recovery."
        extratext="COMING SOON"
        display="display"
      />
      <DoubleCard
        firstimg={sleep}
        secondimg={fitness}
        Fhead="Book and manage your stay"
        Ftext="Stay in control of your SIRO journey. Empowering you with ultimate convenience, the SIRO app lets you explore our international destinations, preview rooms, and personalise your experience."
        Shead="Plan for optimal performance"
        Stext="Find, book and try a variety of studio classes, private training or Destination Fitness experiences. Optimise your fitness routine within the SIRO app to actively fuel your path to peak performance."
      />
      <ImageSection img={recovery} />
      <Title
        head="Revolutionise your recovery"
        text="Repair muscles. Enhance sleep. Reduce stress. Improve your wellbeing with a range of treatments led by in-house therapists. From cryotherapy to dry needling and more, tailor your recovery journey through the app."
      />
      <DoubleCard
        firstimg={meditation}
        secondimg={cycling}
        Fhead="Unlock mental clarity"
        Ftext="Immerse yourself in the art of mindfulness with private classes, bookable through the app. Step into our Zen Room, where moments of clarity and self-discovery become your sanctuary."
        Shead="Elevate your everyday"
        Stext="Think of our app as your personal wellbeing concierge for a custom SIRO experience. Seamlessly navigate through diverse activities, treatments and menus to shape your optimal day in minutes."
      />
      <ImageSection img={Nutrition} />
      <Title
        head="Order macro-friendly meals"
        text="Our app makes it effortless to align your nutrition with your fitness regimen; order specialised meal plans that cater to your specific dietary needs. Level up your wellness journey with culinary experiences that guarantee you perform at your best, whether at home or on the road."
      />
      <Journey
        img={teamimg}
        head="Become a SIRO Club member"
        text="Be among the first to join the SIRO Club and unlock exclusive fitness, recovery and retail benefits. "
        btn="REGISTER NOW"
      />
    </div>
  );
}

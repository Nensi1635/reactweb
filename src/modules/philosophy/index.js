import React from "react";
import Herobanner from "../destination/herobanner";
import ourphilo from "../../assets/images/Our Philosophy Hero Banner.webp";
import fitness from "../../assets/images/philosophy-first-img.webp";
import fitness1 from "../../assets/images/siro-Fitness Programs 1.webp";
import fitness2 from "../../assets/images/fitness2.jpg";
import ClubSec from "../home/clubsec";
import Title from "./title";
import recovery from "../../assets/images/siro-recovery-wide.webp";
import recovery1 from "../../assets/images/Recovery Jagged Image Big.webp";
import recovery2 from "../../assets/images/Recovery Jagged Image Small.webp";
import ImageSection from "./imagesection";
import DoubleImageSec from "./doubleimagesec";
import ImageSlider from "./imageslider";
import nutritionimg from "../../assets/images/nutrition.webp";
import sleep from "../../assets/images/sleepimg.webp";
import FullImage from "./fullimg";
import mindfullness1 from "../../assets/images/Mindfulness Jagged Image Small.webp";
import mindfullness2 from "../../assets/images/Mindfulness Jagged Image Big.webp";
import mindfullness from "../../assets/images/mingfull img.webp";
import app1 from "../../assets/images/Our App-Hero Banner.jpg";
import app2 from "../../assets/images/Download Our App-Banner.jpg";



export default function OurPhilosophy() {
  return (
    <div>
      <Herobanner img={ourphilo} head="Our Philosophy" />
      <Title
        head="The future of fitness + recovery"
        text="SIRO is an immersive lifestyle destination centred on our foundational biohacking pillars: fitness, nutrition, sleep, recovery, and mindfulness. Harnessing innovative technology, exceptional hospitality and world-class wellness specialists, our hotels empower you to unlock peak mental and physical performance, no matter who you are or what you’re striving to achieve."
      />
      <ImageSection img={fitness} />
      <Title
        head="Fitness"
        text="SIRO’s workout programmes and spaces are built around a functional training methodology that supports you through each stage of your fitness journey. Every hotel is equipped with Master Trainers, a digitally integrated Fitness Lab and Destination Fitness activities that take active living beyond hotel grounds. Discover new cities from a unique perspective while reaching your fitness goals at SIRO."
      />
      <DoubleImageSec firstimg={fitness1} secondimg={fitness2} />
      <ImageSlider />
      <Title
        head="Nutrition"
        text="We deliver a personalised culinary experience tailored to your health journey. At SIRO, you can construct your own modular meal plan or consult with our in-house nutritionist for expert guidance. Our menus feature calorie counts and a diverse range of meal choices, all crafted with high quality, homegrown ingredients that support your wellbeing and our local communities."
      />
      <ImageSection img={nutritionimg} />
      <Title
        head="Sleep"
        text="Quality rest is a key component of holistic health. SIRO guest rooms and suites feature recovery equipment, thermoregulation-enhancing cooling mattresses, and integrated technology that boosts relaxation, mitigates jet lag and delivers the ideal environment for restorative sleep."
      />
      <ImageSection img={sleep} />
      <ImageSlider />
      <Title
        head="Recovery"
        text="Tap into the power of SIRO Recovery Labs for ultimate healing. Equipped with state-of-the-art technology, our therapists formulate precise recovery plans tailored to you. Experience a spectrum of treatments including cryotherapy, red light therapy, sports massages, dry needling, and more, all designed to supercharge your journey to recovery."
      />
      <DoubleImageSec firstimg={recovery1} secondimg={recovery2} />
      <FullImage img={recovery} />
      <Title
        head="Mindfulness"
        text="Our methodology is designed to elevate both mind and body. In addition to fitness, recovery and nutrition specialists, SIRO offers access to mindfulness coaches for a holistic approach to wellbeing. Master the art of breathwork, dive into meditation in our Zen Room and nurture your mental acuity."
      />
      <DoubleImageSec firstimg={mindfullness2} secondimg={mindfullness1} />
      <FullImage img={mindfullness} />
      <Title
        head="A digitally driven experience"
        text="At SIRO, your path to wellbeing is powered by technology. Our tech-forward approach ensures that you can personalise your SIRO journey before, during and after your stay. From body composition analysis to a seamless app tailored to you, every aspect of your SIRO experience is cutting-edge, seamless and accessible."
      />
      <DoubleImageSec firstimg={app1} secondimg={app2} />
      <ClubSec />
    </div>
  );
}

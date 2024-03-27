import Home from "./modules/home";
import Header from "./shared/component/header";
import "./style/index.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./shared/component/footer";
import Destination from "./modules/destination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurPhilosophy from "./modules/philosophy";
import TheJournal from "./modules/thejournal";
import OurApp from "./modules/ourapp";
import Membership from "./modules/membership";
import StayConnected from "./modules/stayconnected";
import ContactUs from "./modules/contactus";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destination />} />
          <Route path="/philosophy" element={<OurPhilosophy />} />
          <Route path="/journal" element={<TheJournal />} />
          <Route path="/our-app" element={<OurApp />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/stay-connected" element={<StayConnected />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
          <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

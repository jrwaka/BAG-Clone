import "./components/bag.css";
import BelowSect1 from "./components/BelowSect1";
import Carsaul from "./components/carsaul";
import FirstMainSection from "./components/FirstMainSection";
import NavBar from "./components/NavBar";
import Talents from "./components/Talents";
import Experience from "./components/experience";
import Starting from "./components/starting";
// import Toptalented from "./components/topTalent";
// import University from "./components/university";
// import Button from "./components/button";
// import Testimonials from "./components/testimonial";
// import Pricing from "./components/pricing";
// import Footer from "./components/footer";
const Maincompnent = () => {
  return (
    <div className="">
      <NavBar />
      <FirstMainSection />
      <BelowSect1 />
      <Carsaul />
      <Talents />
      <Experience />
      <Starting />
      {/*
    
   
 
    
      <Toptalented />
      <University />
      <Button />
      <Testimonials />
      <Pricing />
      <Footer /> */}
    </div>
  );
};
export default Maincompnent;

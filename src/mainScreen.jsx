import "./components/bag.css";
import BelowSect1 from "./components/BelowSect1";
import Carsaul from "./components/carsaul";
import FirstMainSection from "./components/FirstMainSection";
import NavBar from "./components/NavBar";
import Talents from "./components/Talents";
import Experience from "./components/experience";
import Starting from "./components/starting";
import Toptalented from "./components/topTalent";
import University from "./components/university";
import Button from "./components/button";
import Testimonials from "./components/testimonial";

const Maincompnent = () => {
  return (
    <div className=" pb-[100px] ">
      <NavBar />
      <FirstMainSection />
      <BelowSect1 />
      <Carsaul />
      <Talents />
      <Experience />
      <Starting />
      <Toptalented />
      <University />
      <Button />
      <Testimonials />
    </div>
  );
};
export default Maincompnent;

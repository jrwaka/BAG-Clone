import "./bag.css";
import BelowSect1 from "./BelowSect1";
import Carsaul from "./carsaul";
import FirstMainSection from "./FirstMainSection";
import NavBar from "./NavBar";
import Talents from "./Talents";

import Experience from "./experience";
import Starting from "../starting";

const Index = () => {
  return (
    <div className="   pb-[100px] ">
      <NavBar />
      <FirstMainSection />
      <BelowSect1 />
      <Carsaul />
      <Talents />
      <Experience />
      <Starting />
    </div>
  );
};

export default Index;

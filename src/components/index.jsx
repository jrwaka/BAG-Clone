import "./bag.css";
import BelowSect1 from "./BelowSect1";
import Carsaul from "./carsaul";
import FirstMainSection from "./FirstMainSection";
import NavBar from "./NavBar";
import Talents from "./Talents";
import Experience from "./experience";
const Index = () => {
  return (
    <div className=" w-[100vw]   pb-[100px] ">
      <NavBar />
      <FirstMainSection />
      <BelowSect1 />
      <Carsaul />
      <Talents />
      <Experience />
    </div>
  );
};

export default Index;

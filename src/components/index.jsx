import "./bag.css";
import BelowSect1 from "./BelowSect1";
import Carsaul from "./carsaul";
import FirstMainSection from "./FirstMainSection";
import NavBar from "./NavBar";

const Index = () => {
  return (
    <div className=" w-[100vw] flex-shrink-0  pb-[100px] ">
      <NavBar />
      <FirstMainSection />
      <BelowSect1 />
      <Carsaul />
    </div>
  );
};

export default Index;

// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carsaul() {
  return (
    <div className="bg-slate-800 px-16 relative text-white h-56">
      <div className="absolute top-0 bottom-0 bg-gradient-to-r from-yellow-800 left-0 z-50 w-56"></div>
      <div className="absolute top-0 bottom-0 bg-gradient-to-l from-yellow-800 right-0 z-50 w-56"></div>
    </div>
  );
}

export default Carsaul;


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carsaul() {
  var settings = {
    dots: false, // Hide dots
    infinite: true, // Enable infinite sliding
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: Infinity, // Slide transition speed (milliseconds)
    pauseOnHover: true,
    cssEase: "linear", // Stop sliding on hover
  };
  return (
    <div>
      <div className=" border p-4 border-slate-400 w-full mx-auto">
        <Slider {...settings}>
          <div className="w-[100px] h-[70px] p-4  slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carsaul;

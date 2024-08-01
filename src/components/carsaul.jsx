// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Carsaul() {
  // var settings = {
  //   dots: false, // Hide dots
  //   infinite: true, // Enable infinite sliding
  //   speed: 3000,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true, // Enable autoplay
  //   autoplaySpeed: Infinity, // Slide transition speed (milliseconds)
  //   pauseOnHover: true,
  //   cssEase: "linear", // Stop sliding on hover
  // };
  return (
    <div className="bg-slate-800 px-16 relative  text-white">
      <div className="absolute top-0 bottom-0 bg-gradient-to-r from-slate-800  left-0 z-50 w-56 ">
        {" "}
      </div>
      <div className="absolute top-0 bottom-0 bg-gradient-to-l from-slate-800 right-0   z-50 w-56 ">
        {" "}
      </div>
      <div className="py-4 px-10  gap-3 relative flex overflow-x-hidden bg-slate-800 items-center z-0">
        <div class="py-12 animate-marquee whitespace-nowrap bg-slate-800">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>

        <div class="absolute top-4 py-12 animate-marquee2 whitespace-nowrap bg-slate-800 z-0">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>
      </div>
      <div className="py-4 px-10  gap-3 relative flex overflow-x-hidden bg-slate-800 items-center z-0">
        <div class="py-12 animate-marquee whitespace-nowrap bg-red-800">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>

        <div class="absolute top-4 py-12 animate-marquee4 whitespace-nowrap bg-red-800 z-0">
          <span class="text-4xl mx-4">Marquee Item 1</span>
          <span class="text-4xl mx-4">Marquee Item 2</span>
          <span class="text-4xl mx-4">Marquee Item 3</span>
          <span class="text-4xl mx-4">Marquee Item 4</span>
          <span class="text-4xl mx-4">Marquee Item 5</span>
        </div>

        {/* <div className=" border  border-slate-400 w-full mx-auto">
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
      </div> */}
      </div>
    </div>
  );
}

export default Carsaul;

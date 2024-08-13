// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import React from "react";
import "slick-carousel/slick/slick-theme.css";

function Carsaul() {
  const images = [
    "/sponser/KeyrusLOGO (2).56579bcb.svg",
    "/sponser/MasakaLogo (1).5812fc30.svg",
    "/sponser/MINICTLogo.cb76e2bd.svg",
    "/sponser/PivotLogo (1).4f9bc30d.svg",
    "/sponser/WinnazLogo (1).8c417e1f.svg",
    "/sponser/BK (1).49106878.svg",
    "/sponser/BPNLogo.dd6f6c1c.svg",
    "/sponser/building.80c20bd7.svg",
    "/sponser2/pesachoice.13bd657f.svg",
    "/sponser2/VibeLogo (1).697f1759.svg",
    "/sponser2/VubaVubaLogo (1).9da55beb.svg",
    "/sponser/KeyrusLOGO (2).56579bcb.svg",
    "/sponser/MasakaLogo (1).5812fc30.svg",
    "/sponser/MINICTLogo.cb76e2bd.svg",
<<<<<<< HEAD
    "/sponser/PivotLogo (1).4f9bc30d.svg",
    "/sponser/WinnazLogo (1).8c417e1f.svg",
    "/sponser/BK (1).49106878.svg",
    "/sponser2/pesachoice.13bd657f.svg",
  ];
  const images2 = [
    "/sponser2/african-union.1c7d5938.svg",
    "/sponser2/cup.ee89f4a1.svg",
    "/sponser2/GoogleStartups.443cf151.svg",
    "/sponser2/hanga.c98cce8b.svg",
    "/sponser2/leap.fc79f59c.svg",
    "/sponser2/make-africa.e4df49a6.svg",
    "/sponser2/african-union.1c7d5938.svg",
    "/sponser2/cup.ee89f4a1.svg",
    "/sponser2/GoogleStartups.443cf151.svg",
    "/sponser2/hanga.c98cce8b.svg",
    "/sponser2/leap.fc79f59c.svg",
    "/sponser2/make-africa.e4df49a6.svg",
=======
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
  ];
  const images2 = [
    "/sponser2/african-union.1c7d5938.svg",
    "/sponser2/cup.ee89f4a1.svg",
    "/sponser2/GoogleStartups.443cf151.svg",
    "/sponser2/hanga.c98cce8b.svg",
    "/sponser2/leap.fc79f59c.svg",
    "/sponser2/make-africa.e4df49a6.svg",
    "/sponser2/african-union.1c7d5938.svg",
    "/sponser2/cup.ee89f4a1.svg",
    "/sponser2/GoogleStartups.443cf151.svg",
    "/sponser2/hanga.c98cce8b.svg",
    "/sponser2/leap.fc79f59c.svg",
    "/sponser2/african-union.1c7d5938.svg",
    "/sponser2/cup.ee89f4a1.svg",
    "/sponser2/GoogleStartups.443cf151.svg",
  ];

  return (
<<<<<<< HEAD
    <div className="mt-24">
      <div className="bg-[#282541] text-white relative ">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#1a182b]  left-0 to-transparent  z-10 2xl:w-[55rem] xl:w-[32rem] w-[10%] lg:w-[32rem]"></div>
=======
    <div className=" mt-16 mx-auto">
      <div className="bg-[#282541] text-white relative pt-8">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#1a182b]  left-0 z-10  w-[10%] 2xl:w-[55rem] xl:w-[32rem] from-20% to-transparent"></div>
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
        <p className="text-center py-6 font-semibold text-3xl">
          Trusted by Top Employers
        </p>
        <div className="flex overflow-hidden">
          <div
<<<<<<< HEAD
            className="flex items-center animate-loopSlide   gap-12  "
=======
            className="flex items-center animate-loopSlide   gap-16 pe-12 "
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
            aria-hidden="true"
          >
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-[100px] h-[50px]  max-w-none"
                />
              );
            })}
          </div>
          <div
<<<<<<< HEAD
            className="flex items-center animate-loopSlide gap-12 ps-20 "
=======
            className="flex items-center animate-loopSlide gap-16  "
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
            aria-hidden="true"
          >
            {images.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-[100px] h-[50px]  max-w-none"
                />
              );
            })}
          </div>
        </div>
<<<<<<< HEAD
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-[#1a182b]   to-transparent right-0 z-10 2xl:w-[55rem] xl:w-[32rem] w-[10%] lg:w-[32rem]"></div>
      </div>
      <div className=" bg-slate-300 text-black relative">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-slate-200 left-0  to-transparent right-0 z-10 2xl:w-[55rem] xl:w-[32rem] w-[10%] lg:w-[32rem]"></div>
        <p className="text-center py-6 font-semibold text-3xl">Backed By</p>
        <div className="flex">
          <div
            className="flex items-center animate-loopSlide2 gap-20 ps-20  "
            aria-hidden="true"
          >
=======
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-[#1a182b]  right-0 z-10  w-[10%] 2xl:w-[55rem] xl:w-[32rem] from-20% to-transparent"></div>
      </div>
      <div className=" bg-slate-200 text-black relative pt-8">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-slate-200 left-0 z-10  w-[10%] 2xl:w-[55rem] xl:w-[32rem] from-50% to-transparent"></div>
        <p className="text-center py-6 font-semibold text-3xl">Backed By</p>
        <div className="flex overflow-hidden">
          <div className="flex items-center  animate-loopSlide2 gap-20 ps-20 ">
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
            {images2.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-[100px] h-[50px]  max-w-none"
                />
              );
            })}
          </div>
<<<<<<< HEAD
        
          <div className="flex items-center animate-loopSlide2   gap-20  ">
=======
          <div
            className="flex items-center animate-loopSlide2   gap-20  "
            aria-hidden="true"
          >
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
            {images2.map((image, index) => {
              return (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-[100px] h-[50px]  max-w-none"
                />
              );
            })}
          </div>
        </div>
<<<<<<< HEAD
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-slate-200 to-transparent right-0 z-10 2xl:w-[55rem] xl:w-[32rem] w-[10%] lg:w-[32rem]"></div>
=======
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-slate-200 right-0 z-10 w-[10%] 2xl:w-[55rem] xl:w-[32rem] from-50% to-transparent"></div>
>>>>>>> 5af8b3e3da3df6b20b3361eb36e004020dc47c6a
      </div>
    </div>
  );
}

export default Carsaul;

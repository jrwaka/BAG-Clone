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
    "/sponser/KeyrusLOGO (2).56579bcb.svg",
    "/sponser/MasakaLogo (1).5812fc30.svg",
    "/sponser/MINICTLogo.cb76e2bd.svg",
    "/sponser/PivotLogo (1).4f9bc30d.svg",
    "/sponser/WinnazLogo (1).8c417e1f.svg",
    "/sponser/BK (1).49106878.svg",
  ];
  // let newImageArr = [];
  // newImageArr = Array.from(images).reverse();

  return (
    <div className=" ">
      <div className="bg-[#282541] text-white relative ">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-[#1a182b]  left-0 z-10 w-56"></div>
        <p className="text-center py-6 font-semibold text-3xl">
          Trusted by Top Employers
        </p>
        <div className="flex">
          <div
            className="flex items-center animate-loopSlide   gap-2  "
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
            className="flex items-center animate-loopSlide gap-2 ps-2 "
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
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-[#1a182b]  right-0 z-10 w-56"></div>
      </div>
      <div className=" bg-slate-300 text-black relative">
        <div className="absolute top-0 bottom-0 bg-gradient-to-r from-white left-0 z-10 w-56"></div>
        <p className="text-center py-6 font-semibold text-3xl">Backed By</p>
        <div className="flex">
          <div
            className="flex items-center animate-loopSlide2 gap-2 ps-2  "
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
          <div className="flex items-center animate-loopSlide2   gap-2  ">
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
        <div className="absolute top-0 bottom-0 bg-gradient-to-l from-white right-0 z-10 w-56"></div>
      </div>
    </div>
  );
}

export default Carsaul;

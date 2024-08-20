import React from "react";

function FirstMainSection() {
  return (
    <div>
      <div className=" flex flex-col gap-4 h-auto md:h-[100vh] mt-10 md:mt-0  justify-center w-100vw items-center  py-[40px] md:py-0 ">
        <div>
          <h1 className="text-[30px] md:text-[74px] font-bold text-center select-none">
            <span>GET </span>
            <span className="text-purple-900">UPSKILLED</span>
          </h1>
        </div>
        <p className="text-center text-sm md:text-xl font-semibold">
          Africa's most innovative job simulation platform
        </p>
        <div className="flex items-center justify-center gap-4  w-full">
          <button className=" sm:px-[30px] sm:py-[13px] rounded-full text-sm p-2 md:shrink-1 sm:shrink-0 bg-blue-600 text-white font-semibold ">
            GET STARTED
          </button>
          <button className="sm:px-[32px] sm:py-[13px] rounded-full text-sm bg-purple-800 text-white font-semibold py-2 px-2 sm:shrink-0 md:shrink-1">
            JOB READINESS SCORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstMainSection;

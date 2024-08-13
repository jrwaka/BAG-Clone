import React from "react";

function FirstMainSection() {
  return (
    <div>
      <div className=" flex flex-col gap-4 h-auto md:h-[100vh] mt-10 md:mt-0  justify-center w-100vw items-center  py-[40px] md:py-0 bg-white  ">
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
          <button className=" px-[30px] py-[13px] rounded-full text-sm bg-blue-600 text-white font-semibold ">
            GET STARTED
          </button>
          <button className="px-[32px] py-[13px] rounded-full text-sm bg-purple-800 text-white font-semibold ">
            JOB READINESS SCORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstMainSection;

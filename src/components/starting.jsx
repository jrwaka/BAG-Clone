import React from "react";

function Starting() {
  return (
    <div className="">
      <div
        className=" bg-white xl:from-blue-100  xl:flex-row  relative pt-5 md:pt-32 bg-gradient-to-b pb-4 to-white
      flex xl:px-20 gap-8 items-center flex-col-reverse "
      >
        <button className="bg-blue-600 absolute md:-top-2 lg:-top-6 -top-10 md:right-[45%]  text-white whitespace-nowrap px-8 py-4 rounded-full text-sm   font-semibold ">
          GET STARTED
        </button>

        <div className=" flex  xl:w-[40%] md:w-2/3 w-[89%] gap-5 xl:px-0  xl:space-y-2  xl:flex-col md:flex-row flex-col">
          <div className=" bg-white  pt-3 flex flex-col flex-1 pb-10  items-center rounded-3xl">
            <img src="./cup.ee89f4a1.svg" alt="hello" />
            <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
              ASAP
            </h1>
            <p className="text-center text-sm mt-2   lg:w-[21rem] font-normal">
              Reduced time spent on onboarding by providing a pre-screened pool
              of candidates who already have experience working remotely within
              your company’s area of expertise.
            </p>
          </div>
          <div className="bg-slate-800 flex flex-col flex-1 px-10 py-14 rounded-3xl items-center ">
            <img
              className="mb-4"
              src="./sponser/building.80c20bd7.svg"
              alt="home"
            />
            <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg text-white">
              Top Talents
            </h1>
            <p className="text-center text-sm   font-normal text-white mt-2">
              Discover and filter top talent profiles within seconds based on
              their skill set and actual proof of work. We instantly save you
              time and money.
            </p>
          </div>
        </div>
        <div className="from-purple-700 to-80% md:ps-[80px] mx-2 md:mx-0 bg-gradient-to-r to-blue-500 rounded-[1rem]  md:rounded-3xl flex flex-col flex-1  gap-1 md:gap-5">
          <p className="text-white  shrink-0 text-nowrap text-xl text-center font-bold xl:text-[48px] my-[1rem] md:my-[3rem]">
            For Employers
          </p>
          <img
            src="./Company dashboard 1.png"
            alt=""
            className=" md:rounded-tl-3xl  h-full md:border-t-2  md:border-l-2 border-black   object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Starting;

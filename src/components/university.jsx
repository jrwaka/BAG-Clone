import React from "react";

function University() {
  return (
    <div className=" mb-4 xl:mb-28">
      <div className=" bg-white xl:from-orange-100  relative pt-12 xl:pt-32 bg-gradient-to-b pb-4 to-white">
        <button className="bg-indigo-700 absolute -top-6 md:right-[40%] right-[30%] xl:right-[45%] text-white px-6 py-3 md:px-7 md:py-3 xl:px-8 xl:py-4  rounded-full text-sm md:text-xl  font-semibold shadow-md shadow-slate-400  ">
          GET STARTED
        </button>
        <div className="flex gap-8 xl:flex-row-reverse flex-col-reverse px-10  xl:px-20 xl:justify-center">
          <div className=" flex  xl:w-[40%] w-full  space-y-6 md:flex-row flex-col  xl:flex-col">
            <div className=" bg-white border border-gray-3 pt-4 flex flex-col flex-1 pb-10  items-center rounded-3xl">
              <img src="./cup.ee89f4a1.svg" alt="hello" />
              <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
                Enhance Your Curriculum
              </h1>
              <p className="text-center text-sm mt-2   lg:w-[21rem] font-normal">
                Integrate our job simulations into your educational programs to
                provide students with real-world experience to enhance their
                employability.
              </p>
            </div>
            <div className=" bg-gradient-to-br from-slate-950 to-slate-800 flex flex-col flex-1 px-10 py-10 xl:py-16  pb-10 rounded-3xl items-center ">
              <img
                className="mb-4"
                src="./sponser/building.80c20bd7.svg"
                alt="home"
              />
              <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg text-white">
                Industry Insights Access
              </h1>
              <p className="text-center text-sm   font-normal text-white mt-2">
                Partner with us to bring practical, industry-relevant content
                into your classrooms to ensure your students are prepared for
                the modern workforce.
              </p>
            </div>
          </div>
          <div className="from-orange-500  to-80% md:ps-[80px] bg-gradient-to-r to-amber-400 bg- rounded-[2rem]  md:rounded-3xl flex flex-col flex-1 gap-1  xl:gap-3">
            <p className="text-white shrink-0 text-nowrap  text-center font-bold md:text-[37px] xl:text-[48px] md:my-[2rem] my-[1rem] xl:my-[3rem]">
              For Employers
            </p>
            <img
              src="./Company dashboard 1.png"
              alt=""
              className=" md:rounded-tl-3xl   h-full md:border-t-2  md:border-l-2 border-black   object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default University;

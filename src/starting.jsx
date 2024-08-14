import React from "react";

function Starting() {
  return (
    <div className="">
      <div className=" bg-white md:from-blue-100 relative pt-12 md:pt-32 bg-gradient-to-b pb-4 to-white">
        <button className="bg-blue-600 absolute -top-6 right-[45%] text-white px-8 py-4 rounded-full   font-semibold ">
          GET STARTED
        </button>
        <div className="flex gap-8 md:flex-row flex-col-reverse px-0  md:px-20 md:justify-center">
          <div className=" flex  md:w-[40%] w-full  space-y-6  flex-col">
            <div className=" bg-white border border-gray-3 pt-4 flex flex-col flex-1 pb-10  items-center rounded-3xl">
              <img src="./cup.ee89f4a1.svg" alt="hello" />
              <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
                ASAP
              </h1>
              <p className="text-center text-sm mt-2   lg:w-[21rem] font-normal">
                Reduced time spent on onboarding by providing a pre-screened
                pool of candidates who already have experience working remotely
                within your company’s area of expertise.
              </p>
            </div>
            <div className="bg-slate-800 flex flex-col flex-1 px-10 py-16 rounded-3xl items-center ">
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
          <div className="from-purple-700 to-80% md:ps-[80px] bg-gradient-to-r to-blue-500 rounded-[2rem]  md:rounded-3xl flex flex-col flex-1  gap-3">
            <p className="text-white shrink-0 text-nowrap  text-center font-bold text-[48px] my-[2rem] md:my-[3rem]">
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

export default Starting;

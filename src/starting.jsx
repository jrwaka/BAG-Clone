import React from "react";

function Starting() {
  return (
    <div>
      <div className="bg-blue-100 relative pt-20">
        <button className="bg-blue-600 absolute top-0 right-24 text-white px-4 py-2 rounded-xl font-semibold ">
          GET STARTED
        </button>
        <div className="flex gap-5">
          <div className=" flex  flex-col items-center justify-between  gap-5   flex-1">
            <div className="  h-full justify-between flex flex-col rounded-xl ">
              <div className=" bg-white pt-4 flex flex-col items-center  ">
                <img className="mb-4" src="./cup.ee89f4a1.svg" alt="hello" />
                <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
                  ASAP
                </h1>
                <p className="text-center text-sm mt-2   lg:w-[21rem] font-normal">
                  Reduced time spent on onboarding by providing a pre-screened
                  pool of candidates who already have experience working
                  remotely within your company’s area of expertise.
                </p>
              </div>
              <div className="bg-slate-800 flex flex-col p-10 rounded-3xl items-center ">
                <img
                  className="mb-4"
                  src="./sponser/building.80c20bd7.svg"
                  alt="home"
                />
                <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg text-white">
                  Top Talents
                </h1>
                <p className="text-center text-sm   font-normal text-white mt-2">
                  Discover and filter top talent profiles within seconds based
                  on their skill set and actual proof of work. We instantly save
                  you time and money.
                </p>
              </div>
            </div>
          </div>
          <div className="from-blue-600  to-50% md:ps-[80px] bg-gradient-to-l to-blue-500 rounded-[4rem]  md:rounded-3xl flex flex-col flex-2  gap-3 ">
            <p className="text-white shrink-0 text-nowrap  text-center font-bold text-[48px] my-[2rem] md:my-[3rem]">
              For Employers
            </p>
            <img
              src="./Company dashboard 1.png"
              alt=""
              className=" md:rounded-xl border-none md:border-l-2 h-[450px] border-black border-t-2 px- object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starting;

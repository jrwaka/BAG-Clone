import React from "react";

function Talents() {
  return (
    <div className="items-center justify-between lg:px-[60px] xl:gap-5 gap-10 flex px-1 pt-20 xl:flex-row flex-col md:mx-auto ">
      <div className="from-blue-600  to-50% md:ps-[80px] bg-gradient-to-l to-blue-500 rounded-[1.7rem]  md:rounded-3xl flex flex-col   ">
        <p className="text-white text-center font-bold xl:text-[48px] md:text-[35px] text-lg my-[2rem] md:my-[3rem]">
          FOR TALENTS
        </p>
        <img
          src="talents.jpg"
          alt=""
          className=" md:rounded-xl md:border-l-2 h-[450px] border-black shrink-0 md:border-t-2 object-cover"
        />
      </div>

      <div className="w-full flex-1 flex xl:flex-col lg:flex-row flex-col items-center gap-10 xl:gap-5  ">
        <div className="bg-white border border-slate-200 w-[90%] flex flex-col rounded-3xl items-center xl:pb-0 pb-10 ">
          <img className="mb-4" src="./cup.ee89f4a1.svg" alt="hello" />
          <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
            Gain Work Experience
          </h1>
          <p className="text-center text-sm   sm:w-[21rem] font-normal sm:pb-10">
            Complete Work Experiences and tasks to enhance your profile. Receive
            scores and detailed feedback from employers on areas for
            improvement.
          </p>
        </div>
        <div className="bg-slate-800  w-[90%] flex flex-col rounded-3xl items-center xl:pb-0 pb-10 ">
          <img
            className="mb-4"
            src="./sponser/building.80c20bd7.svg"
            alt="home"
          />
          <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem] text-white">
            Get Employed
          </h1>
          <p className="text-center text-sm   font-normal text-white sm:w-[21rem] sm:pb-10 ">
            We match you with job and internship opportunities that align with
            your skills, interests, and performance scores.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Talents;

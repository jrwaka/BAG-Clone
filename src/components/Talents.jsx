import React from "react";

function Talents() {
  return (
    <div className="px-[60px] space-x-6  mx-auto flex pt-20 lg:flex-row flex-col">
      <div className="bg-blue-400  ps-[80px] rounded-3xl flex flex-col flex-2  gap-3 ">
        <p className="text-white font-bold text-[48px] my-[3rem]">
          FOR TALENTS
        </p>
        <img
          src="talents.jpg"
          alt=""
          className="rounded-xl border-l-2 h-[450px] border-black border-t-2 px- object-cover"
        />
      </div>

      <div className=" flex flex-col items-center justify-between   flex-1 px-6">
        <div className="bg-white flex flex-col items-center pb-5 ">
          <img className="mb-4" src="./cup.ee89f4a1.svg" alt="hello" />
          <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg  lg:w-[21rem]  ">
            Gain Work Experience
          </h1>
          <p className="text-center text-sm mt-2   lg:w-[21rem] font-normal">
            Complete Work Experiences and tasks to enhance your profile. Receive
            scores and detailed feedback from employers on areas for
            improvement.
          </p>
        </div>
        <div className="w-[400px]  py-10">
          <div className="bg-yellow-200 flex flex-col gap-3  items-center">
            <img className="" src="./cup.ee89f4a1.svg" alt="hello" />
            <h1 className="xl:text-3xl font-bold lg:text-xl text-sm">
              Gain Work Experience
            </h1>
            <p className="text-center">
              Complete Work Experiences and tasks to enhance your profile.
              Receive scores and detailed feedback from employers on areas for
              improvement.
            </p>
          </div>
          <div></div>

          <div className="bg-slate-800 flex flex-col p-10 rounded-3xl items-center ">
            <img
              className="mb-4"
              src="./sponser/building.80c20bd7.svg"
              alt="home"
            />
            <h1 className="text-center font-bold 2xl:text-3xl xl:text-4xl  md:text-xl text-lg text-white">
              Get Employed
            </h1>
            <p className="text-center text-sm   font-normal text-white mt-2">
              We match you with job and internship opportunities that align with
              your skills, interests, and performance scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;

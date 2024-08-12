import React from "react";

function Talents() {
  return (
    <div className="   px-[60px] ">
      <div className="  rounded-3xl flex  mt-28  gap-5 ">
        <div className="bg-blue-400  ps-[80px] rounded-3xl flex flex-col flex-1  gap-3">
          <p className="text-white font-bold text-[48px] my-[3rem]">
            FOR TALENTS
          </p>
          <img
            src="talents.jpg"
            alt=""
            className="rounded-xl border-l-2 h-[450px] border-black border-t-2 px- object-cover"
          />
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
        </div>
      </div>
    </div>
  );
}

export default Talents;

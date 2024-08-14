import React from "react";

function Toptalented() {
  return (
    <div>
      <div className="flex mt-28 gap-5 px-[60px]  mb-28">
        <div className=" bg-blue-100 p-8  justify-center rounded-3xl flex    gap-8">
          <div className="  w-[450px]  bg-white rounded-3xl justify-evenly hidden md:flex flex-col">
            {/** STYLE THE RESPONSIVENESS ACCORDING TO THIS DIV AND TRY TO AVOID MARGIN AND PADDING USE FLEXING AND GAP */}

            <div className="px-4 flex gap-3 ">
              <div>
                <img
                  className="w-16"
                  src="./icons/arcticons--number-circle-1.svg"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl flex">Top Job Opportunities</p>
                <p className="font-normal flex-auto text-slate-400 pr-5 bg-white text-sm">
                  Connect with leading employers across Africa for job and
                  internship opportunities.
                </p>
              </div>
            </div>

            <div className="px-4 flex gap-3">
              <div>
                <img
                  className="w-16"
                  src="./icons/flash-outline.svg"
                  alt="hello"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl flex">Top Job Opportunities</p>
                <p className="font-normal flex-auto text-slate-400 pr-5 bg-white text-sm">
                  Connect with leading employers across Africa for job and
                  internship opportunities.
                </p>
              </div>
            </div>

            <div className="px-4 flex gap-3">
              <div>
                <img className="w-16" src="./icons/path.svg" alt="hello" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-bold text-xl flex">Top Job Opportunities</p>
                <p className="font-normal flex-auto text-slate-400 pr-5 bg-white text-sm">
                  Connect with leading employers across Africa for job and
                  internship opportunities.
                </p>
              </div>
            </div>
          </div>

          {/** STYLE THE RESPONSIVENESS ACCORDING TO THIS DIV AND TRY TO AVOID MARGIN AND PADDING USE FLEXING AND GAP */}

          <div className="py-16   flex-wrap gap-5 ">
            <div className=" ">
              <p className="font-bold text-4xl text-center">
                Popular Work Experiences
              </p>
              <p className="mt-5 text-center">
                Kickstart your career growth by joining our virtual job
                simulations. We're excited to support your journey towards
                achieving your professional goals.
              </p>
            </div>

            <div className="md:grid md:grid-cols-3 overflow-x-scroll md:overflow-x-visible  gap-6 mt-5  pt-6 ">
              <div className="bg-blue-200 flex flex-col justify-between  overflow-hidden  rounded-3xl xl:w-[14.375rem]  w-[17rem]h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Bonheur</h2>
                <img src="./persons/bonheur.png" alt="Bonheur" />
              </div>
              <div className="bg-white flex flex-col justify-between  overflow-hidden  rounded-3xl  xl:w-[14.375rem]  w-[17rem]h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Bonheur</h2>
                <img src="./persons/Deng.png" alt="Deng" />
              </div>
              <div className="from-gray-500 bg-gradient-to-b to-white t0-50% flex flex-col justify-between  overflow-hidden  rounded-3xl  xl:w-[14.375rem]  w-[17rem]h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Mutesi</h2>
                <img src="./persons/Mutesi.webp" alt="Lwanda" />
              </div>
              <div className="from-gray-500 bg-gradient-to-b to-white t0-50% flex flex-col justify-between  overflow-hidden  rounded-3xl  xl:w-[14.375rem]  w-[17rem]h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Bonheur</h2>
                <img src="./persons/Nkurunziza.webp" alt="Mutesi" />
              </div>
              <div className="bg-blue-200 flex flex-col justify-between  overflow-hidden  rounded-3xl  xl:w-[14.375rem]  w-[17rem]h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Bonheur</h2>
                <img src="./persons/Yves.webp" alt="Nkurunziza" />
              </div>
              <div className="bg-white flex flex-col justify-between  overflow-hidden  rounded-3xl  xl:w-[14.375rem]  w-[17rem] h-[11.125rem]">
                <h2 className="font-bold text-lg text-center mt-2">Bonheur</h2>
                <img src="./persons/Lwanda.webp" alt="Yves" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Toptalented;

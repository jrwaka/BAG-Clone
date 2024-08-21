import React from "react";

function Experience() {
  const imageArr=["/persons/image.jpg","/persons/image.jpg","/persons/image.jpg","/persons/image.jpg","/persons/image.jpg","/persons/image.jpg"]
  return (
    <div>
      <div className="flex mt-28 gap-5 px-14 pe-20  mb-28">
        <div className="bg-blue-100   justify-center   rounded-3xl flex flex-row p-5   gap-5">
          <div className=" w-[18.8rem]  bg-white rounded-3xl justify-evenly hidden xl:flex flex-col">
            {/** STYLE THE RESPONSIVENESS ACCORDING TO THIS DIV AND TRY TO AVOID MARGIN AND PADDING USE FLEXING AND GAP */}

            <div className="px-4 flex gap-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                  />
                </svg>
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

          <div className=" flex flex-col gap-5">
            <div className="border  space-y-10 ">
              <p className=" mt-2  font-bold text-4xl text-center ">
                Popular Work Experiences
              </p>
              <p className="text-center">
                Kickstart your career growth by joining our virtual job
                simulations. We're excited to support your journey towards
                achieving your professional goals.
              </p>
            </div>

            <div className=" xl:grid xl:grid-cols-3 flex md:flex-row flex-col overflow-y-auto md:h-full gap-6 h-[160px]  overflow-x-auto   ">
          {imageArr.map((index)=>{
            <img key={index} src={index} alt="image"/>
          })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

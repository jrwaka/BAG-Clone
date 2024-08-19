import React, { useCallback } from "react";
import "./bag.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div>
      <div className="mt-24 flex flex-col gap-10 px-28 relative">
        <p className=" text-center font-bold text-[2rem]">TESTIMONIALS</p>
        <div className="embla bg-white " ref={emblaRef}>
          <div className="embla__container ">
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <p className="bg-slate-100 w-12 h-12 flex justify-center items-center rounded-full text-xl">
                    U
                  </p>
                  <div className="flex flex-col ">
                    <p className="font-semibold">UWASE</p>
                    <p className="text-gray-500 text-[12px]">
                      {" "}
                      ADMINISTRATIVE INTERN
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  Grateful for their job-linking program that matched me with a
                  suitable job and provided seamless, invaluable support.
                </div>
              </div>
            </div>{" "}
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <img
                    className=" rounded-full"
                    src="./persons/TMaud.png"
                    alt="xx"
                  ></img>
                  <div className="flex flex-col ">
                    <p className="font-semibold">MAUD</p>
                    <p className="text-gray-500 xl:text-[12px] md:text-[10px] text-[8px]">
                      {" "}
                      ANAPLAN CONSULTANT
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  Happy to collaborate with BAG on our Rwanda program again.
                  Their recruitment support is hugely beneficial.
                </div>
              </div>
            </div>{" "}
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <p className="bg-slate-100 w-12 h-12 flex justify-center items-center rounded-full text-xl">
                    T
                  </p>
                  <div className="flex flex-col ">
                    <p className="font-semibold">THIJS</p>
                    <p className="text-gray-500 xl:text-[12px] md:text-[10px] text-[8px]">
                      {" "}
                      FOUNDER & GENERAL MANAGER
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  A great team behind bag, good service! At the moment bag is
                  handling two vacancies for us.
                </div>
              </div>
            </div>{" "}
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <img
                    className=" rounded-full"
                    src="./persons/TDavid.png"
                    alt="xx"
                  ></img>
                  <div className="flex flex-col ">
                    <p className="font-semibold">DAVID</p>
                    <p className="text-gray-500 xl:text-[12px] md:text-[10px] text-[8px]">
                      {" "}
                      ALU STUDENT
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  Awesome work you are doing, thank you for your continued work
                  in helping the youth in Africa secure the BAG!
                </div>
              </div>
            </div>{" "}
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <img
                    className=" rounded-full"
                    src="./persons/TM.png"
                    alt="xx"
                  ></img>
                  <div className="flex flex-col ">
                    <p className="font-semibold">MUTSINZI</p>
                    <p className="text-gray-500 xl:text-[12px] md:text-[10px] text-[8px]">
                      {" "}
                      GGS INDRAPRASTHA UNIVERSITY STUDENT
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  I gained key skills with BAG and recommend it to Rwandan Youth
                  for career growth and experience.
                </div>
              </div>
            </div>{" "}
            <div className="embla__slide bg-transparent  ">
              <div className=" h-full px-3 py-6 flex flex-col gap-4 ">
                {" "}
                <div className="bg-white flex items-center space-x-5 w-fit">
                  <p className="bg-slate-100 w-12 h-12 flex justify-center items-center rounded-full text-xl">
                    D
                  </p>
                  <div className="flex flex-col ">
                    <p className="font-semibold">DEBORAH</p>
                    <p className="text-gray-500 xl:text-[12px] md:text-[10px] text-[8px]">
                      {" "}
                      EXECUTIVE ASSISTANT
                    </p>
                  </div>
                </div>
                <div className="w-[80%] text-gray-400">
                  I am grateful to BAG Team for their crucial support in my job
                  search and for leading me to this opportunity.
                </div>
              </div>
            </div>{" "}
          </div>
          <button
            className="border border-black text-xl text-white  absolute left-10 top-[60%] rounded-full p-2"
            onClick={scrollPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button
            className="border border-black  text-xl text-white absolute right-10 top-[60%] rounded-full p-2"
            onClick={scrollNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

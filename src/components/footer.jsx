import React from "react";

function Footer() {
  return (
    <div className="bg-slate-800 p-10">
      <div className=" p-10  flex justify-between w-full">
        <div className="flex flex-col xl:gap-4 2xl:w-[200px] text-white">
          <img
            className="h-12 w-12 sm:w14 md:h-12 lg:h-[80px] lg:w-[80px] xl:h-[34px] xl:w-[60px]"
            src="./icons/BAG-Logo.ce7e902b.svg"
            alt="BAB"
          />
          <p className="font-medium text-md text-white md:text-xs 2xl:w-[300px] md:w-[220px]">
            BAG provides you with the right tools for your career development.
          </p>

          <div className="flex justify-start gap-5 ">
            {" "}
            <img
              className="w-3"
              src="/icons/facebookIcon.5901a940.svg"
              alt=""
            />
            <img className="w-3" src="/icons/twitterIcon.11857656.svg" alt="" />
            <img
              className="w-3"
              src="/icons/instagramIcon.b26f9511.svg"
              alt=""
            />
            <img
              className="w-3"
              src="/icons/linkedinIcon.d154f162.svg"
              alt=""
            />
            <img className="w-3" src="/icons/youtubeIcon.80f1c1a2.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-5  ">
          <h2 className="text-base font-bold text-white md:text-sm">Company</h2>

          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            Our Team
          </a>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            Pricing
          </a>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            Contact Us
          </a>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            FAQs
          </a>
        </div>
        <div className="flex flex-col gap-6 md:gap-5  ">
          <h2 className="text-base font-bold text-white md:text-sm">
            Who we serve
          </h2>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            Talents
          </a>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            Employers
          </a>
          <a
            className="text-base text-blue-100 hover:underline md:text-sm"
            href="/"
          >
            University
          </a>
        </div>
      </div>
      <hr className="bg-slate-700 h-0.5 opacity-50" />
      <div className="flex   justify-center gap-5 pt-6 text-base font-normal text-white">
        <p>&#169; 2024 - BAG Technologies Ltd</p>
        <div className="flex gap-1">
          <a
            href="/"
            className="text-base text-blue-100 hover:underline md:text-sm"
          >
            Privacy policy
          </a>
          &middot;
          <a
            href="/"
            className="text-base text-blue-100 hover:underline md:text-sm"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

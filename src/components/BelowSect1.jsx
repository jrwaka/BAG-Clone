import React from "react";

export default function BelowSect1() {
  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-5 bg-white">
        <div className="lg:bg-white lg:hover:bg-blue-600  lg:text-blue-600 lg:hover:text-white bg-blue-600 text-white belowSect1Card">
          <div className="text-3xl font-bold py-3">20k+</div>
          <div className="text-[1rem] font-bold ">Talents</div>
        </div>
        <div className="lg:bg-white lg:text-purple-600 lg:hover:text-white lg:hover:bg-purple-600 bg-purple-600 text-white belowSect1Card">
          <div className="text-3xl font-bold py-3">1k+</div>
          <div className="text-[1rem] font-bold">Job Placements</div>
        </div>
        <div className="lg:bg-white lg:text-orange-500 lg:hover:text-white lg:hover:bg-orange-500 bg-orange-500 text-white belowSect1Card">
          <div className="text-3xl font-bold py-3">150+</div>
          <div className="text-[1rem] font-bold">Employers</div>
        </div>
        <div className="lg:bg-white lg:text-black lg:hover:text-white lg:hover:bg-black bg-black text-white belowSect1Card">
          <div className="text-3xl font-bold py-3">15+</div>
          <div className="text-[1rem] font-bold">Universities</div>
        </div>
      </div>
    </div>
  );
}

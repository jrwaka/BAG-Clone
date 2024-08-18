import React from "react";

function Button() {
  return (
    <div>
      <div className="mx-auto flex justify-center items-center">
        {" "}
        <button className="bg-orange-500 w-[14%] text-white px-4 py-3 rounded-full text-[1.3rem] font-semibold  shadow-md shadow-slate-400  ">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Button;

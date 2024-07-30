import React from "react";
import "./FirstMainSection.css";
function FirstMainSection() {
  return (
    <div>
      <div className="section-1">
        <div>
          <h1 className="sectionTxt">
            <span>GET </span>
            <span className="sPan">UPSKILLED</span>
          </h1>
        </div>
        <p className="text-center text-xl font-semibold">
          Africa's most innovative job simulation platform
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="firstsectionBtn">GET STARTED</button>
          <button className="px-[30px] py-[15px] rounded-full text-md bg-purple-800 text-white font-semibold">
            JOB READINESS SCORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstMainSection;

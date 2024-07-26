import React from "react";
import "./components/fixed.css";
export default function Nav() {
  const LinkArr = ["Home", "Service", "Blog", "Contact", "About Us"];
  return (
    <>
      <nav>
        <div className="logo">LOGOHola</div>
        <div className=" ">
          <ul className="Ul">
            {LinkArr.map((link) => (
              <li key={link} className="bg-blue-400">
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center p-1 bg-gradient-to-br from-blue-400 to-purple-400">
          <img
            style={{
              width: "80px",
              height: "80px",
              objectPosition: "center",
              objectFit: "cover",
            }}
            src="/profilePic.png"
            alt="logo"
            className="w-[10px] h-[10px] rounded-full "
          />
          <button>Sign Up</button>
        </div>
      </nav>
    </>
  );
}

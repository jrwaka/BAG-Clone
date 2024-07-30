import React, { useState } from "react";
// import "./bag.css";
import "./NavBar.css";

function NavBar() {
  const [togglemenu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!togglemenu);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const LinkArr = [
    "Talents",
    "Employers",
    "Universities",
    "Job Board",
    "About Us",
    "Contact Us",
  ];
  return (
    <div>
      <nav className="navBar">
        <img src="BAG.png" alt="" className="h-[24px], w-[72px] bg-slate-400" />
        <div className="navLink">
          <a href="/" className="betweenLink">
            Talents
          </a>
          <a href="/" className="betweenLink">
            Employers
          </a>
          <a href="/" className="betweenLink"></a>
          <a href="/" className="betweenLink">
            Job Board
          </a>
          <div
            className=""
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/" className="betweenLink">
              Our Team
            </a>
            <div className="dropdown">
              {isDropdownOpen && (
                <div className="absolute -right-22 top-8 mt-2 w-45 bg-black border border-gray-200 rounded-md shadow-lg">
                  <a
                    href="/"
                    className="block px-4 py-2 text-blue-600 font-semibold"
                  >
                    FAQ
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-blue-600 font-semibold"
                  >
                    Contact
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="navButton ">
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-3 rounded-full  bg-gray-100 text-black hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
              Login
            </button>
            <button className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold whitespace-nowrap">
              Get Started
            </button>
            <button className="toggleMenu" onClick={toggleMenu}>
              {togglemenu ? (
                <svg
                  className="close"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="open"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
                  ></path>
                </svg>
              )}
            </button>
          </div>
          <button className="toggleMenu" onClick={toggleMenu}>
            {togglemenu ? (
              <svg
                className="close"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M17.414 16L24 9.414L22.586 8L16 14.586L9.414 8L8 9.414L14.586 16L8 22.586L9.414 24L16 17.414L22.586 24L24 22.586z"
                ></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className="open"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.5 6.5h15M4.5 12h15m-15 5.5h15"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div className={`   ${togglemenu ? "menu" : " hiddenmenu"} `}>
        <div className="HiddenMenu">
          <ul className="list">
            {LinkArr.map((link) => (
              <li key={link}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
          <button>
            <a href="/">Login</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

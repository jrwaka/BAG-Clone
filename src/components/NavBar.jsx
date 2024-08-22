import React, { useState } from "react";
import { motion } from "framer-motion";
const variants = {
  open: {
    y: -50,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

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
      <nav className="flex  justify-between items-center fixed top-0 z-50 md:left-24 md:right-24 px-8 py-2 md:rounded-b-[2rem] md:text-xs lg:text-[16px] text-xs left-0 right-0 rounded-none border border-gray-200 bg-white">
        <img src="BAG.png" alt="" className="h-[23px], w-[70px]" />
        <div className="hidden md:flex   flex-1 flex-shrink justify-around p-3 ">
          <div className="p-2 ">
            <a href="/" className="betweenLink">
              Talents
            </a>
          </div>

          <div className="p-2 ">
            <a href="/" className="betweenLink">
              Employers
            </a>
          </div>

          <div className="p-2 ">
            <a href="/" className="betweenLink">
              Universities
            </a>
          </div>

          <div className="p-2 ">
            <a href="/" className="betweenLink">
              Job Board
            </a>
          </div>

          <div
            className=" p-2 relative "
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <a href="/" className="betweenLink ">
              Our Team
            </a>
            <div className="dropdown">
              {isDropdownOpen && (
                <div className="absolute left-0 top-6 mt-2 w-45 bg-white text-sm">
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
        <div className="items-center  justify-between gap-3 relative ">
          <div className="hidden md:flex items-center gap-4">
            <button className="px-5 py-3 rounded-full  bg-gray-100 text-black hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
              Login
            </button>
            <button className="px-5 py-3 rounded-full bg-blue-600 text-white font-semibold whitespace-nowrap">
              Get Started
            </button>
            {/* <button className="text-3xl block md:hidden" onClick={toggleMenu}>
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
            </button> */}
          </div>
          <button
            className="md:hidden block text-3xl absolute z-50 right-4 -top-4"
            onClick={toggleMenu}
          >
            {togglemenu ? (
              <svg
                className="open"
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
                className="close"
              >
                <path
                  fill="none"
                  stroke="black"
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
        <motion.div className="HiddenMenu">
          <ul className="list">
            {/* <button onClick={toggleMenu} className="absolute  right-12 top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button> */}
            {LinkArr.map((link) => (
              <motion.li
                variants={variants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                key={link}
              >
                <a href="/">{link}</a>
              </motion.li>
            ))}
          </ul>
          {/**hidden button */}
          <button className="hover:bg-blue-500 border border-blue-300 w-2/3 py-3 rounded-full text-black font-semibold whitespace-nowrap cursor-pointer ">
            <a href="/">Login</a>
          </button>
          <button className="bg-blue-500 w-2/3 py-3 rounded-full text-white font-semibold whitespace-nowrap cursor-pointer hover:bg-blue-400">
            <a href="/">Get Started</a>
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default NavBar;

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import "./bag.css";
const Index = () => {
  const [togglemenu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!togglemenu);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  var settings = {
    dots: false, // Hide dots
    infinite: true, // Enable infinite sliding
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: Infinity, // Slide transition speed (milliseconds)
    pauseOnHover: true,
    cssEase: "linear", // Stop sliding on hover
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
    <div className="w-full pt-[250px] pb-[100px] flex flex-col justify-center ">
      <nav className="navBar">
        <img src="BAG.png" alt="" className="h-[24px], w-[72px] bg-slate-400" />
        <div className="navLink">
          <a href="/" className="betweenLink">
            Talents
          </a>
          <a href="/" className="betweenLink">
            Employers
          </a>
          <a href="/" className="betweenLink">
            Universities
          </a>
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
                <div
                  className={`absolute -right-22 top-8 mt-2 w-45 bg-white border border-gray-200 rounded-md shadow-lg`}
                >
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
      <div
        className={` hidden  ${togglemenu ? "menu" : " hidden"} flex flex-col `}
      >
        <ul className="list">
          {LinkArr.map((link) => (
            <li key={link}>
              <a href="/">{link}</a>
            </li>
          ))}
        </ul>

        <a href="/" className=" py-4 text-center text-lg font-semibold">
          Login
        </a>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <h1 className="text-7xl font-bold text-center">
            <span>GET </span>
            <span className="text-purple-900">UPSKILLED</span>
          </h1>
        </div>
        <p className="text-center text-xl font-semibold">
          Africa's most innovative job simulation platform
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="px-[30px] py-[15px] rounded-full text-md bg-blue-600 text-white font-semibold">
            GET STARTED
          </button>
          <button className="px-[30px] py-[15px] rounded-full text-md bg-purple-800 text-white font-semibold">
            JOB READINESS SCORE
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[5rem] gap-4">
        <div className="bg-white hover:bg-blue-600  text-blue-600 hover:text-white transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer">
          <div className="text-[3rem] font-bold">20k+</div>
          <div className="text-[1rem] font-bold">Talents</div>
        </div>
        <div className="bg-white text-purple-800 hover:text-white hover:bg-purple-800 transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer">
          <div className="text-[3rem] font-bold ">1k+</div>
          <div className="text-[1rem] font-bold">Job Placements</div>
        </div>
        <div className="bg-white text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer">
          <div className="text-[3rem] font-bold">150+</div>
          <div className="text-[1rem] font-bold">Employers</div>
        </div>
        <div className="bg-white text-black hover:text-white hover:bg-black transition-all duration-200 py-4 pr-6 pl-5 rounded-lg border border-gray-300 cursor-pointer">
          <div className="text-[3rem] font-bold">15+</div>
          <div className="text-[1rem] font-bold">Universities</div>
        </div>
      </div>
      <div className=" border p-4 border-slate-400 w-full mx-auto">
        <Slider {...settings}>
          <div className="w-[100px] h-[70px] p-4  slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
          <div className="w-[100px] h-[70px] p-4 slide">
            <img src="BAG.png" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Index;

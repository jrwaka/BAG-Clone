import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import './bag.css';
const Index =() =>{
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen);
        }
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
    return(
        <div className='w-full pt-[250px] pb-[100px] flex flex-col justify-center'>
            <nav className='flex items-center justify-between px-8 py-4 bg-white rounded-b-[2.5rem] border shadow-sm fixed z-100 top-0 right-[8rem] left-[8rem]'>
                <img src="BAG.png" alt="" className='h-20, w-20'/>
            <div className='hidden md:flex space-x-8'>
                <a href="#" className='text-gray-000 hover:text-blue-600 font-semibold'>Talents</a>
                <a href="#" className='text-gray-000 hover:text-blue-600 font-semibold'>Employers</a>
                <a href="#" className='text-gray-000 hover:text-blue-600 font-semibold'>Universities</a>
                <a href="#" className='text-gray-000 hover:text-blue-600 font-semibold'>Job Board</a>
                <div className='relative' onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                <a href="#" className='text-gray-000 h-full p-4 hover:text-blue-600 font-semibold'>Our Team</a>
                {isDropdownOpen && (
            <div className={`absolute -right-22 top-4 mt-2 w-45 bg-white border border-gray-200 rounded-md shadow-lg`}>
              <a href="#" className="block px-4 py-2 text-blue-600 font-semibold">FAQ</a>
              <a href="#" className="block px-4 py-2 text-blue-600 font-semibold">Contact</a>
            </div>
          )}
                </div>
            </div>

            <div className='flex items-center space-x-4'>
                <button className='px-6 py-3 rounded-full text-sm bg-gray-100 text-black hover:bg-blue-600 hover:text-white transition duration-300 font-semibold'>Login</button>
                <button className='px-9 py-3 rounded-full text-sm bg-blue-600 text-white font-semibold'>Get Started</button>
            </div>
            </nav>

            <div className='flex flex-col gap-4'>
                <div>
                <h1 className='text-7xl font-bold text-center'><span>GET </span><span className='text-purple-900'>UPSKILLED</span></h1>
                </div>
                <p className='text-center text-xl font-semibold'>Africa's most innovative job simulation platform</p>
                <div className='flex items-center justify-center gap-4'>
                <button className='px-[30px] py-[15px] rounded-full text-md bg-blue-600 text-white font-semibold'>GET STARTED</button>
                <button className='px-[30px] py-[15px] rounded-full text-md bg-purple-800 text-white font-semibold'>JOB READINESS SCORE</button>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[5rem] gap-4'>
                <div className='bg-white hover:bg-blue-600  text-blue-600 hover:text-white transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer'>
                    <div className='text-[3rem] font-bold'>
                    20k+
                    </div>
                    <div className='text-[1rem] font-bold'>
                        Talents
                    </div>
                </div>
                <div className='bg-white text-purple-800 hover:text-white hover:bg-purple-800 transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer'>
                    <div className='text-[3rem] font-bold '>
                    1k+
                    </div>
                    <div className='text-[1rem] font-bold'>
                        Job Placements
                    </div>
                </div>
                <div className='bg-white text-orange-500 hover:text-white hover:bg-orange-500 transition-all duration-200 py-4 pr-6 pl-4 rounded-lg border border-gray-300 cursor-pointer'>
                    <div className='text-[3rem] font-bold'>
                    150+
                    </div>
                    <div className='text-[1rem] font-bold'>
                        Employers
                    </div>
                </div>
                <div className='bg-white text-black hover:text-white hover:bg-black transition-all duration-200 py-4 pr-6 pl-5 rounded-lg border border-gray-300 cursor-pointer'>
                    <div className='text-[3rem] font-bold'>
                    15+
                    </div>
                    <div className='text-[1rem] font-bold'>
                        Universities
                    </div>
                </div>
            </div>
            <div className=" border p-4 border-slate-400 w-full mx-auto">
      <Slider {...settings}>
        <div className="w-[100px] h-[70px] p-4  slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
        <div className="w-[100px] h-[70px] p-4 slide">
          <img src="BAG.png" alt=""/>
        </div>
      </Slider>
    </div>
        </div>
    )
}

export default Index
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <a href="/" className="text-white text-2xl font-bold">MyWebsite</a>
        
//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-4">
//           <a href="#home" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
//           <a href="#about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">About</a>
//           <a href="#services" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Services</a>
//           <a href="#contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
//         </div>
        
//         {/* Mobile Menu Button */}
//         <button 
//           onClick={() => setIsOpen(!isOpen)} 
//           className="md:hidden text-white focus:outline-none"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>
      
//       {/* Mobile Menu */}
//       <div className={md:hidden ${isOpen ? "block" : "hidden"} mt-4}>
//         <a href="#home" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">Home</a>
//         <a href="#about" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">About</a>
//         <a href="#services" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">Services</a>
//         <a href="#contact" className="block text-white hover:bg-gray-700 px-3 py-2 rounded">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
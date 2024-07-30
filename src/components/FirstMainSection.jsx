
import "./FirstMainSection.css";
function FirstMainSection() {
  return (
    <div>
      <div className="bg-black justify-center items-center mt-[5rem] gap-4">
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
    </div>
  );
}

export default FirstMainSection;

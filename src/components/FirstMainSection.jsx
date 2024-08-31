import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function FirstMainSection() {
  const words = ["GET UPSKILLED", "MATCHED TO JOBS", "GAIN EXPERIENCE"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [words.length]);

  const getColorClass = (word) => {
    if (word.includes("UPSKILLED")) return "text-indigo-500";
    if (word.includes("JOBS")) return "text-yellow-600";
    if (word.includes("EXPERIENCE")) return "text-blue-600";
    return "";
  };

  const renderWord = (phrase) => {
    return phrase.split(" ").map((part, index) => {
      if (["GET", "GAIN", "MATCHED", "TO"].includes(part)) {
        return (
          <span key={index} className="text-black">
            {part}{" "}
          </span>
        );
      } else {
        return (
          <span key={index} className={getColorClass(part)}>
            {part}{" "}
          </span>
        );
      }
    });
  };

  const variants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and transparent
    visible: { opacity: 1, y: -5 }, // Animate to fully visible at normal position
    exit: { opacity: 0, y: -30 }, // Animate to move above and transparent
  };

  return (
    <div>
      <div className="flex flex-col gap-4 h-auto md:h-[22rem] mt-10 md:mt-20 justify-center w-full items-center py-[40px] md:py-0">
        <div className="overflow-hidden h-10 lg:h-28 md:h-20">
          <h1 className="text-[30px] lg:text-[74px] md:text-[50px] font-bold text-center select-none overflow-hidden h-full">
            <AnimatePresence>
              <motion.span
                key={currentWordIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.3 }}
                className="block"
              >
                {renderWord(words[currentWordIndex])}
              </motion.span>
            </AnimatePresence>
          </h1>
        </div>
        <p className="text-center text-sm md:text-xl font-semibold">
          Africa's most innovative job simulation platform
        </p>
        <div className="flex items-center justify-center gap-4 w-full">
          <button className="sm:px-[30px] sm:py-[13px] rounded-full text-sm p-2 md:shrink-1 sm:shrink-0 bg-blue-600 text-white font-semibold">
            GET STARTED
          </button>
          <button className="sm:px-[32px] sm:py-[13px] rounded-full text-sm bg-purple-800 text-white font-semibold py-2 px-2 sm:shrink-0 md:shrink-1">
            JOB READINESS SCORE
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstMainSection;

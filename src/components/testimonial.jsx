import React, { useCallback } from "react";
import "./bag.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 2000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div>
      <div>
        <p>TESTIMONIALS</p>
        <div className="embla bg-slate-400 py-1 relative" ref={emblaRef}>
          <div className="embla__container ">
            <div className="embla__slide bg-purple-400  w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>{" "}
            <div className="embla__slide bg-cyan-300 w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>{" "}
            <div className="embla__slide bg-fuchsia-400  w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>{" "}
            <div className="embla__slide bg-slate-500  w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>{" "}
            <div className="embla__slide bg-orange-400  w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>{" "}
            <div className="embla__slide bg-blue-600  w-1/3">
              <div>
                <img src="./persons/TM.png" alt="xx"></img>
                <div>GGS INDRAPRASTHA UNIVERSITY STUDENT</div>
              </div>
              <div>
                I gained key skills with BAG and recommend it to Rwandan Youth
                for career growth and experience.
              </div>
            </div>
          </div>
          <button
            className="bg-purple-400 text-xl text-white px-2 py-1 absolute left-0 top-[50%]"
            onClick={scrollPrev}
          >
            Prev
          </button>
          <button
            className="bg-blue-400 px-2 py-1 text-xl text-white absolute right-0 top-[50%]"
            onClick={scrollNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

import { useState } from "react";
import { ScrollParallax } from "react-just-parallax";
import { discovers } from "../../../constants/data";
import Button from "../../Button";
import Section from "../../Section";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { recording03 } from "../../../assets";
import PopCard from "../../PopCard";

const Discover = () => {
  const [active, setActive] = useState<number>(1);

  const goNext = () => {
    setActive((index) => {
      if (index === discovers.length - 1) return 0;
      return index + 1;
    });
  };
  const goBack = () => {
    setActive((index) => {
      if (index === 0) return discovers.length - 1;
      return index - 1;
    });
  };
  return (
    <Section id="discover" withPlus={false}>
      <div className=" relative isolate z-20 lg:min-h-[40rem] 2xl:w-[72%] xl:w-[84%] w-[94%]   mx-auto mb-[50rem] lg:mb-[16rem]">
        <div className=" ">
          {discovers.map((discover, index) => {
            return (
              active === index && (
                <div
                  key={discover.id}
                  className="grid  grid-cols-1 lg:grid-cols-[1.5fr_2fr] xl:grid-cols-[1.25fr_2fr] "
                >
                  <div className="px-2 min-h-[20rem]  lg:h-auto">
                    <h2 className="mb-6 h2 text-start pr-12 lg:pr-4">
                      {discover.title}
                    </h2>
                    <p className="p2 w-[80%] text-light-3  mb-8 ">
                      {discover.text}
                    </p>
                    <Button
                      styles="mb-6"
                      ariaLabel={`discover-slides-btn-${discover.id}`}
                    >
                      {discover.btnText}
                    </Button>
                  </div>

                  <div className="relative flex justify-center">
                    <div className="absolute flex justify-end gap-20  lg:left-[16rem] top-[8rem]">
                      <div className="relative w-[30rem] h-[30rem] rounded-[3rem] border border-light-1/50">
                        <div className="absolute bottom-6 left-0 right-0 z-20 mx-auto px-16 lg:px-12">
                          <ScrollParallax>
                            <PopCard title={discover.cardText} />
                          </ScrollParallax>
                        </div>

                        <div className="absolute w-[4rem] h-[4rem] right-[2rem] top-[2rem] pointer-events-none">
                          <img
                            src={recording03}
                            alt="recording-image"
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <ScrollParallax
                          enableOnTouchDevice
                          isAbsolutelyPositioned
                        >
                          <div className="absolute left-[-9rem] top-[10rem] w-[25rem] h-[25rem] pointer-events-none">
                            <img
                              src={discover.mainImg}
                              className="w-full h-full object-contain"
                              alt={`discover-image-${discover.id}`}
                            />
                          </div>
                        </ScrollParallax>
                      </div>
                      <div className="hidden lg:block w-[30rem] h-[30rem] rounded-[3rem] border border-light-1/10"></div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>

        <div className="flex gap-5 absolute bottom-0">
          <button
            onClick={goBack}
            className="group w-[3.8rem] h-[3.8rem] rounded-full bg-dark-7/40 flex items-center justify-center"
          >
            <HiArrowLeft
              size={24}
              className="group-hover:text-light-1/80  text-light-1/50"
            />
          </button>
          <button
            onClick={goNext}
            className="group w-[3.8rem] h-[3.8rem] rounded-full bg-dark-7/40 flex items-center justify-center"
          >
            <HiArrowRight
              size={24}
              className="group-hover:text-light-1/80  text-light-1/50"
            />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Discover;
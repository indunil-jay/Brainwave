import { FaAngleRight, FaRegCircle, FaRegCircleDot } from "react-icons/fa6";
import Section from "./Section";
import { benefits } from "../constants/data";
import { useState } from "react";

const Features = () => {
  const [cardIndex, setCardIndex] = useState<number>(3);

  const moveCard = (dotIndex: number) => {
    setCardIndex((index) => {
      if (index === benefits.length - 1 && index < 0) return 0;
      return dotIndex;
    });
  };

  return (
    <Section id="features" styles="-mt-2">
      <div className="mt-20">
        <h2 className="h2 text-center px-[3%] sm:px-[12%] md:px-[20%] lg:px-[24%] xl:px-[24.5%] 2xl:px-[28%]">
          Chat Smarter, Not Harder with Brainwave
        </h2>

        {/* slider */}
        <div className="mb-20 mt-20">
          <div className="relative  w-[600%]  xl:w-[300%] z-50  flex items-center ">
            <div
              className="flex gap-10 mb-10   md:translate-x-[16rem]   lg:translate-x-[24rem]  isolate   xl:translate-x-[34rem] "
              style={{ translate: `${-18 * cardIndex}%` }}
            >
              {/* card */}
              {benefits.map((card) => {
                return (
                  <div
                    className="group relative block md:max-w-[24rem] p-2 border rounded-3xl  shadow-2xl shadow-blue-500/20"
                    key={card.id}
                  >
                    <div className="min-h-[22rem]  bg- p-[2.4rem] flex flex-col justify-around  rounded-3xl">
                      <div>
                        <h3 className="font-medium text-[1.5rem] leading-7 mb-5 capitalize">
                          {card.title}
                        </h3>
                        <p className="mb-6 text-light-3 font-base leading-6 font-light">
                          {card.text}
                        </p>
                      </div>

                      <div className="flex justify-between items-center ">
                        <div className="w-[3rem] h-[3rem]">
                          <img
                            src={card.iconUrl}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex items-center cursor-pointer  px-3 py-3 rounded-xl gap-4 ">
                          <a className="font-code uppercase text-xs font-semibold">
                            {" "}
                            Explore more
                          </a>
                          <FaAngleRight fontSize={16} />
                        </div>
                      </div>
                    </div>

                    <div className="absolute rounded-3xl -z-10 overflow-hidden  inset-0  opacity-0 transition-opacity group-hover:opacity-10 ">
                      <img
                        src={card.imageUrl}
                        alt="background image"
                        className="w-full h-full object-contain "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* slider dots */}
          <div className="flex gap-4 justify-center">
            {benefits.map((_, index) => (
              <button key={index} onClick={() => moveCard(index)}>
                {cardIndex === index ? <FaRegCircleDot /> : <FaRegCircle />}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;

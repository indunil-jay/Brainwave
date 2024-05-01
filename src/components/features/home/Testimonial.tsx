import { FaRegCircleDot } from "react-icons/fa6";
import { testimonialcards } from "../../../constants/data";
import Button from "../../Button";
import Section from "../../Section";
import Brackets from "../../design/Brackets";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { ScrollParallax } from "react-just-parallax";

const Testimonial = () => {
  const [cardIndex, setCardIndex] = useState<number>(0);

  const moveCard = (dotIndex: number) => {
    setCardIndex((index) => {
      if (index === testimonialcards.length - 1 && index < 0) return 0;
      return dotIndex;
    });
  };
  return (
    <Section id="testimonial">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto  ">
        <div className="flex flex-col items-center mt-10 ">
          <Brackets> READY TO GET STARTED</Brackets>
          <h2 className="h2 py-2 my-4">What the community is saying</h2>
        </div>

        <div className="w-full h-[32rem]  my-10  grid place-items-center relative">
          <ScrollParallax>
            <div
              className="relative w-full lg:w-[52rem] rounded-3xl h-full  lg:h-[90%] flex gap-[15%] "
              style={{ translate: `${-115 * cardIndex}%` }}
            >
              {testimonialcards.map((card) => (
                <div
                  key={card.id}
                  className="relative w-full h-full  rounded-3xl border border-light-1/50   flex-shrink-0 flex-grow-0"
                >
                  <div className="absolute w-full h-full md:h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <img
                      src={card.image}
                      alt={`testimonial-image-${card.name}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute z-20 w-[86%] h-[78%] md:w-[22rem] md:h-[30rem] right-[50%] top-[50%]  -translate-y-1/2 translate-x-1/2 md:top-[4rem] md:right-[2rem] md:-translate-y-0 md:-translate-x-0 bg-conic-gradient rounded-3xl overflow-hidden grid place-items-center">
                    <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-3xl bg-dark-1">
                      <div className="p-6 flex flex-col items-start justify-evenly h-full w-full">
                        <p className="pcode mb-3">{card.testimonial}</p>
                        <Button
                          ariaLabel={`testimonial-see-all-btn-${card.id}`}
                        >
                          See All
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute  top-[1rem] left-[1rem] md:top-[2rem] md:left-[2rem] w-[calc(100%-4rem)]">
                    <div className="w-[10rem] md:w-[16rem] md:h-[4rem]">
                      <img
                        src={card.logo}
                        className="w-full h-full object-contain"
                        alt={`robots-image-${card.id}`}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-[0.5rem] left-[1rem] w-[calc(100%-32px)] md:flex-col  flex justify-between">
                    <h3 className="md:h4">{card.name}</h3>
                    <p className="md:h5 text-light-3 hyphens-auto">
                      {card.occupation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollParallax>
        </div>

        <div className="flex gap-4 mt-[7.5rem] items-center justify-center">
          {testimonialcards.map((_, index) => (
            <button
              key={index}
              onClick={() => moveCard(index)}
              className="bg-transparent"
            >
              {index === cardIndex ? <FaRegCircleDot /> : <FaCircle />}
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;

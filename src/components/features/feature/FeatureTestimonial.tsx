import { useState } from "react";
import { testimonailcards } from "../../../constants/data";
import Section from "../../Section";
import FeatureTestimonialCard from "./FeatureTestimonialCard";
import { FaRegCircleDot } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";

const FeatureTestimonial = () => {
  const [currentActiveCard, setCurrentActiveCard] = useState<number>(1);

  const moveCard = (dotIndex: number) => {
    setCurrentActiveCard((index) => {
      if (index === testimonailcards.length - 1 && index < 0) return 0;
      return dotIndex;
    });
  };

  return (
    <Section id="feature-testimonial">
      <div className="relative 2xl:w-[72%] xl:w-[84%] w-[94%] mx-auto ">
        <div className="relative lg:min-w-[34.375rem]  mx-auto lg:h-[34rem] bg-conic-gradient rounded-3xl lg:rounded-tr-[7rem] flex items-center justify-center ">
          <div className=" w-[calc(100%-4px)] my-[2px] lg:my-0  lg:h-[calc(100%-4px)]  bg-dark-1 rounded-3xl lg:rounded-tr-[7rem] p-4 lg:p-8 2xl:p-20 ">
            <div className="grid grid-cols-1  md:grid-cols-[1fr_20rem] h-full relative">
              {testimonailcards.map(
                (card, index) =>
                  currentActiveCard === index && (
                    <FeatureTestimonialCard key={card.id} card={card} />
                  )
              )}
            </div>
          </div>
          <div className="absolute bottom-5 flex gap-4 mt-[7.5rem] items-center justify-center">
            {testimonailcards.map((_, index) => (
              <button
                key={index}
                onClick={() => moveCard(index)}
                className="bg-transparent"
              >
                {index === currentActiveCard ? (
                  <FaRegCircleDot />
                ) : (
                  <FaCircle />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FeatureTestimonial;

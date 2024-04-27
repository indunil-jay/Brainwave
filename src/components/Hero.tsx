import { ScrollParallax } from "react-just-parallax";
import { curve, heroBackground, loading, robot } from "../assets";
import { heroIcons } from "../constants/data";
import Button from "./Button";
import PopCard from "./PopCard";
import Section from "./Section";
import BackgroundCircles from "./design/Circles";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <Section id="hero">
      <div
        className="relative z-20 flex flex-col justify-center items-center mt-20 "
        ref={parallaxRef}
      >
        <h1 className="h1 text-center">
          <span className="block"> Explore the Possibilities</span>
          <span className="inline-block">
            of AI Chatting with {` `}
            <span className="relative inline-block">
              <span>Brainwave</span>
              <img
                src={curve}
                alt="curve-image"
                className="absolute w-full top-full "
              />
            </span>
          </span>
        </h1>

        <p className="p px-[6%] md:px-[12%] lg:px-[18%] xl:px-[25%] 2xl:px-[30%] text-center mt-6 text-light-2">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>

        <Button styles="mt-6" whiteBtn={true} withArrow={true}>
          Get Started
        </Button>
      </div>

      <div className="relative  max-w-[32rem] lg:max-w-[64rem] mx-auto mt-12 xl:mb-24 ">
        <div className="relative rounded-2xl z-10 p-0.5 bg-conic-gradient ">
          <ScrollParallax isAbsolutelyPositioned zIndex={50}>
            <div className="hidden  absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-light-6/40 backdrop-blur border border-light-1/10 rounded-2xl xl:flex">
              <ul className="flex">
                {heroIcons.map((icon, index) => {
                  return (
                    <li key={index} className="p-5">
                      <img src={icon} width={24} height={24} alt="icons" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </ScrollParallax>
          <ScrollParallax isAbsolutelyPositioned zIndex={50}>
            <PopCard
              title="Code generation"
              styles="hidden absolute z-20  -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
            />
          </ScrollParallax>

          <div className="absolute bottom-5 left-0 right-0 z-50 flex gap-3 md:gap-8 items-center w-[88%] md:w-[60%] mx-auto bg-dark-2/90  px-4 md:px-6 py-4 rounded-full">
            <div className="w-5 h-5">
              <img src={loading} alt="loading images" />
            </div>
            <span> AI is generating</span>
          </div>

          <div className="relative  bg-dark-1 rounded-[1rem]">
            <div className="h-[1.4rem] bg-dark-7 rounded-t-[0.9rem]" />

            <div className="rounded-b-[0.9rem] aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden">
              <img
                src={robot}
                className="h-auto w-full  scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
              />
            </div>
          </div>
        </div>

        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={heroBackground}
            className="w-full"
            width={1440}
            height={1800}
            alt="hero"
          />{" "}
        </div>

        <BackgroundCircles parallaxRef={parallaxRef} />
      </div>
    </Section>
  );
};

export default Hero;

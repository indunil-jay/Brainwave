import { useRef } from "react";
import { background, grid } from "../assets";
import Section from "./Section";
import BackgroundCircles from "./design/Circles";
import FormLayout from "./forms/FormLayout";
import { ScrollParallax } from "react-just-parallax";

const HeroLayout = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  return (
    <Section id="signin-page-hero">
      <div className=" 2xl:w-[76%] xl:w-[84%] w-[94%] mx-auto h-[calc(100dvh-8rem)] mt-[3rem] lg:h-[calc(100dvh-14rem)] lg:mt-[7rem] ">
        <div className="relative w-full h-full" ref={parallaxRef}>
          <div className="grid z-50 bg-transparent  lg:grid-cols-2 w-full h-full">
            <div className="flex flex-col justify-center items-center px-4">
              <h1 className="h2 md:px-[14%] 2xl:px-[16%] text-center lg:text-start">
                Join the AI revolution with Brainwave
              </h1>
              <p className="p2 mt-10 md:px-[13%] 2xl:px-[16%] text-light-3 hidden lg:block">
                Get started with Brainwave - AI chat app today and experience
                the power of AI in your conversations!
              </p>
            </div>

            <div className="flex flex-col justify-center items-center h-full w-full">
              <div className="bg-conic-gradient  grid place-items-center rounded-3xl">
                <div className="bg-dark-1 w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-3xl  p-4 lg:p-8">
                  <FormLayout
                    formTitle="Sign in to your account"
                    type="LOGIN"
                  />
                </div>
              </div>
            </div>
          </div>
          <ScrollParallax
            zIndex={-10}
            scrollContainerRef={parallaxRef}
            enableOnTouchDevice
          >
            <div className="absolut top-0 right-0">
              <BackgroundCircles parallaxRef={parallaxRef} />
            </div>
          </ScrollParallax>
          <div className="absolute w-full h-auto  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-50 ">
            <img
              src={background}
              alt="background-image"
              className=" w-full h-auto opacity-5
              blur-sm  "
            />
          </div>
          <div className="absolute top-[-6rem] left-0  -z-50 ">
            <img
              src={grid}
              width={600}
              height={600}
              alt="background-grid-image"
              className=""
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HeroLayout;

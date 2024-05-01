import { curve, gradient } from "../assets";
import Button from "./Button";
import { BackgroundCircles } from "./MobileNav";
import Section from "./Section";
import Rings from "./design/Rings";

const LandingEnd = () => {
  return (
    <Section id="landing-end">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] h-[35vw] relative mx-auto grid place-items-center mb-[20rem]">
        <div className="relative z-20 flex flex-col justify-center items-center mt-20 ">
          <h1 className="h1 text-center">
            <span className="block"> Be part of the future of</span>

            <span className="relative inline-block">
              <span>Brainwave</span>
              <img
                src={curve}
                alt="curve-image"
                className="absolute w-full top-full "
              />
            </span>
          </h1>

          <p className="p1 px-[6%] md:px-[12%]  text-center mt-6 text-light-2">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
          </p>

          <Button styles="mt-6" whiteBtn={true} withArrow={true}>
            Get Started
          </Button>
        </div>

        <BackgroundCircles />
        <Rings />

        <div className="absolute overflow-hidden -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
          <img
            src={gradient}
            className="w-full opacity-5"
            width={1440}
            height={1800}
            alt="hero"
          />{" "}
        </div>
      </div>
    </Section>
  );
};

export default LandingEnd;

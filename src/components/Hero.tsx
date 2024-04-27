import { curve } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section>
      <div className="flex flex-col justify-center items-center mt-20">
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

        <p className="p px-[6%] md:px-[12%] lg:px-[18%] xl:px-[25%] 2xl:px-[30%] text-center mt-10 text-light-2">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          with Brainwave, the open AI chat app.
        </p>

        <Button styles="mt-10" whiteBtn={true} withArrow={true}>
          Get Started
        </Button>
      </div>
    </Section>
  );
};

export default Hero;

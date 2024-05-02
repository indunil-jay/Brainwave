import { Link } from "react-router-dom";
import { curve, gradient } from "../assets";
import Button from "./Button";
import Section from "./Section";

const LandingEnd = () => {
  return (
    <Section id="landing-end" withPlus={false}>
      <div className="container relative mb-[5rem] grid place-items-center ">
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

          <Link to="/signin">
            <Button styles="mt-6" whiteBtn={true} withArrow={true}>
              Get Started
            </Button>
          </Link>
        </div>

        <div className="absolute -z-20 w-[50rem]  overflow-hidden ">
          <img
            src={gradient}
            className="w-full h-full object-cover opacity-20"
            alt="hero"
          />{" "}
        </div>
      </div>
    </Section>
  );
};

export default LandingEnd;

import { discover1, lines, stars } from "../assets";
import { pricing } from "../constants/data";
import Button from "./Button";
import PriceCard from "./PriceCard";
import Section from "./Section";
import Brackets from "./design/Brackets";

const Pricing = () => {
  return (
    <Section id="pricing">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto  ">
        <div className="relative h-[64vw] md:h-[46vw] lg:h-[38vw]  2xl:h-[25vw] flex items-center justify-center">
          <div className="absolute w-[16rem] h-[16rem]">
            <img
              src={discover1}
              alt="spirial-image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute w-full h-full">
            <img
              src={stars}
              alt="star-galaxy-image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex flex-col items-center  ">
          <Brackets> get started with brainwave</Brackets>
          <h2 className="h2 py-2 my-4">Pay once, use forever</h2>
        </div>

        {/*  */}

        <div className="relative flex flex-col items-center lg:flex-row gap-3 justify-center mt-14">
          {pricing.map((data) => (
            <PriceCard key={data.id} data={data} />
          ))}

          <div className="hidden lg:block absolute top-[30%]  left-[-92rem] 2xl:left-[-86.5rem]">
            <img
              src={lines}
              className="w-full h-full object-contain"
              alt="side-line-1"
            />
          </div>
          <div className="hidden lg:block absolute top-[30%] right-[-92rem] 2xl:right-[-86.5rem] rotate-180">
            <img
              src={lines}
              className="w-full h-full object-contain"
              alt="side-line-1"
            />
          </div>
        </div>

        {/*  */}
        <div className="flex items-center justify-center mt-20  ">
          <Button
            href="/"
            styles="border-none underline underline-offset-8  hover:no-underline "
          >
            See The full Details
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;

import Section from "../../Section";
import Button from "../../Button";
import { coins, hero } from "../../../assets";
import GeneratingText from "../../design/GeneratingText";

const RoadmapHero = () => {
  return (
    <Section id="roadmp-hero" withBottomDividers={false} withPlus={false}>
      <div className="relative z-20 flex flex-col justify-center items-center mt-[8rem] ">
        <h1 className="h1 text-center">Roadmap</h1>

        <p className="p1 px-[6%] md:px-[12%] lg:px-[18%] xl:px-[25%] 2xl:px-[30%] text-center mt-6 text-light-3">
          This document provides a comprehensive guide to developing a chat AI
          app, including its key features and development steps.
        </p>

        <Button
          styles="mt-6"
          whiteBtn={true}
          withArrow={true}
          ariaLabel="suggets-feature-btn"
        >
          Suggets Features
        </Button>
      </div>
      <div className="relative  max-w-[32rem] lg:max-w-[64rem] mx-auto mt-20 xl:mb-24 ">
        <div className="relative rounded-2xl z-10 p-0.5 bg-conic-gradient ">
          <div className="relative  bg-dark-1 rounded-[1rem]">
            <div className="h-[1.4rem] bg-dark-7 rounded-t-[0.9rem]" />

            <div className="rounded-b-[0.9rem] aspect-[33/40] md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden">
              <img
                alt="roadmap-hero-image"
                src={hero}
                className="object-contain w-full h-full translate-y-[-8%]"
              />
            </div>
            <GeneratingText />
            <div className="absolute top-[-8rem] left-[7rem]">
              <img src={coins} alt="coins image" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RoadmapHero;

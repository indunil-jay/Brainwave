import { work02 } from "../../../assets";
import Section from "../../Section";

const FeatureHero = () => {
  return (
    <div className="mt-[5rem]">
      {" "}
      <Section id="featurehero" withBottomDividers={false}>
        <div className="relative 2xl:w-[72%] xl:w-[84%] w-[94%] mx-auto h-[65vh] ">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full">
            <div className="w-full h-full flex flex-col  lg:justify-center lg:pr-[32%]">
              <h1 className="h1 mb-8">Main features of Brainwave</h1>
              <p className="text-[1.5rem] leading-[2.25rem] text-light-3 ">
                Here are some of the core features of Brainwavethat make it
                stand out from other chat applications
              </p>
            </div>
            <div className="w-full h-fullgrid place-items-center">
              <img
                src={work02}
                alt="feature-page-bg-image"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FeatureHero;

import FeatureOptionBgCard from "./FeatureOptionBgCard";
import FeatureOptionDataCard from "./FeatureOptionDataCard";
import Section from "./Section";

const FeatureOptions = () => {
  return (
    <Section id="feature_option">
      <div className="relative 2xl:w-[66%] xl:w-[84%] w-[94%] mx-auto  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 my-20">
          <FeatureOptionBgCard />
          <FeatureOptionDataCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 my-20">
          <FeatureOptionDataCard />
          <FeatureOptionBgCard />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-4 my-20">
          <FeatureOptionBgCard />
          <FeatureOptionDataCard />
        </div>
      </div>
    </Section>
  );
};

export default FeatureOptions;

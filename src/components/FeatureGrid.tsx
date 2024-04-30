import FeatureCardBox from "./FeatureCardBox";
import Section from "./Section";

const FeatureGrid = () => {
  return (
    <Section id="feature-options">
      <div className="relative 2xl:w-[72%] xl:w-[84%] w-[94%] mx-auto ">
        <FeatureCardBox />
      </div>
    </Section>
  );
};

export default FeatureGrid;

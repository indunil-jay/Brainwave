import Section from "../../Section";
import FeatureCardBox from "../feature/FeatureCardBox";

const Features = () => {
  return (
    <Section id="features" styles="-mt-2" withBottomDividers={false}>
      <div className="container">
        <h2 className="h2 mb-20 text-center px-[3%] sm:px-[12%] md:px-[20%] lg:px-[24%] xl:px-[24.5%] 2xl:px-[28%]">
          Chat Smarter, Not Harder with Brainwave
        </h2>
        <FeatureCardBox />
      </div>
    </Section>
  );
};

export default Features;

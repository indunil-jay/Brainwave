import { gradient } from "../../../assets";
import { benefits } from "../../../constants/data";
import FeatureCard from "./FeatureCard";

const FeatureCardBox = () => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative ">
      <div className="absolute top-[65%] left-[10%] -translate-x-1/2 -translate-y-1/2 -z-20 opacity-20  mix-blend-color-dodge">
        <img src={gradient} alt="gradient-background-image" />
      </div>
      <div className="absolute right-[-20%]  opacity-30  mix-blend-color-dodge">
        <img src={gradient} alt="gradient-background-image" />
      </div>
      {benefits.map((card) => {
        return <FeatureCard key={card.id} card={card} />;
      })}
    </div>
  );
};

export default FeatureCardBox;

import { roadmapItems } from "../../../constants/data";
import Section from "../../Section";
import RoadMapCard from "./RoadMapCard";

const RoadMapFlow = () => {
  return (
    <Section
      id="roadmap-flow"
      withBottomDividers={false}
      withPlus={false}
      styles="overflow-visible"
    >
      <div className="mx-auto max-w-[70rem] bg-transparent">
        <ul className="-mb-15 md:mb-0">
          {roadmapItems.map((item) => (
            <RoadMapCard key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default RoadMapFlow;

import { testimonailcards } from "../constants/data";
import CommunityCard from "./CommunityCard";
import Section from "./Section";
import Brackets from "./design/Brackets";

const CommunitySection = () => {
  return (
    <Section id="community-section" withBottomDividers={false} withPlus={false}>
      <div className="container relative">
        <div className="flex flex-col items-center my-20 ">
          <Brackets> READY TO GET STARTED</Brackets>
          <h2 className="h2 py-2 my-4">What the community is saying</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[22.5rem_22.5rem] xl:grid-cols-[22.5rem_22.5rem_22.5rem] gap-3 place-content-center ">
          {testimonailcards.map((card) => (
            <CommunityCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CommunitySection;

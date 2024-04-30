import { works } from "../constants/data";
import Section from "./Section";
import WorksCard from "./WorksCard";
import Brackets from "./design/Brackets";

const Ourwork = () => {
  return (
    <Section id="working-on">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto">
        <div className="flex flex-col items-center my-10 ">
          <Brackets> READY TO GET STARTED</Brackets>
          <h2 className="h2 py-2 my-4">What we’re working on</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-[4rem] lg:my-[10rem]">
          {works.map((card) => (
            <WorksCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Ourwork;

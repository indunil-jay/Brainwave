import { Link } from "react-router-dom";
import { works } from "../../../constants/data";
import Button from "../../Button";
import Section from "../../Section";
import WorksCard from "../../WorksCard";
import Brackets from "../../design/Brackets";

const Ourwork = () => {
  return (
    <Section id="working-on" withBottomDividers={false}>
      <div className="container relative lg:mb-[5rem] bg-transparent ">
        <div className="flex flex-col items-center my-10 ">
          <Brackets> READY TO GET STARTED</Brackets>
          <h2 className="h2 py-2 my-4">What we’re working on</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-[4rem] lg:my-[10rem]">
          {works.map((card) => (
            <WorksCard key={card.id} card={card} />
          ))}
        </div>

        <div className=" flex justify-center items-center">
          <Link to="/roadmap">
            <Button ariaLabel="roadmap-btn" whiteBtn={true} withArrow={true}>
              our Road map
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default Ourwork;

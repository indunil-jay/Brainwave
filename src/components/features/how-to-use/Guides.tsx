import { guides } from "../../../constants/data";
import Section from "../../Section";
import GuidesCard from "./GuidesCard";
import Search from "./Search";

const Guides = () => {
  return (
    <Section id="guides" withBottomDividers={false} withPlus={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%]  relative mx-auto">
        <Search />

        <div className="mt-[5rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[24.5rem_1fr] ">
            <div className="bg-blue-300"></div>
            <div>
              <h2 className="h2 py-6 ml-8 mb-16 border-b-[1px] capitalize border-b-light-1/10">
                Getting started
              </h2>
              <div className="ml-8">
                {guides.map((guide) => (
                  <GuidesCard key={guide.id} guide={guide} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Guides;

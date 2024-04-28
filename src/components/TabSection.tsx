import { useState } from "react";
import { tabContent } from "../constants/data";

import Section from "./Section";

import TabImage from "./TabImage";
import TabDetails from "./TabDetails";
import MobileTabSection from "./MobileTabSection";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <Section id="signup">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%]   mx-auto">
        <MobileTabSection />
        {/* grid */}
        <div className="grid grid-cols-[2fr_1.8fr] gap-2">
          {tabContent.map((item) => {
            return (
              activeTab === (Number(item.id) || 1) && (
                <>
                  <div className="w-full hidden lg:flex  justify-start ">
                    <TabImage image={item.img} />
                  </div>

                  <div className="hidden lg:flex flex-col justify-center ">
                    {/* <div className="">
                      <Brackets>How It work : 01. </Brackets>
                      <h2 className="h2 mb-5">{item.title}</h2>
                      <p className="p2 text-light-2 mb-7">{item.text}</p>
                      <Button>{item.btnText}</Button>
                    </div> */}
                    <TabDetails item={item} />
                  </div>
                </>
              )
            );
          })}
        </div>

        {/* tabs */}
        <div className="hidden lg:grid  group  grid-cols-4 gap-8 pt-10">
          {tabContent.map((item) => (
            <div
              onClick={() => handleClick(Number(item.id))}
              key={item.id}
              className={`cursor-pointer pt-8 border-t-[2px] border-light-2/10 transition-colors   ${
                item.id === activeTab
                  ? "border-primary-1 "
                  : "hover:border-light-2/50 "
              }`}
            >
              <p className="font-grotesk tracking-tagline text-xs uppercase  text-light-1/50">
                0{item.id}.
              </p>
              <h5 className="h5 capitalize mt-2 mb-3">{item.title}</h5>
              <p
                className={`p2 text-light-2 mb-5 line-clamp-3 hyphens-auto opacity-0 ${
                  item.id === activeTab ? "opacity-80" : ""
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default TabSection;

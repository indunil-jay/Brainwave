// import TabDetails from "./TabDetails";

import { useState } from "react";
import { tabContent } from "../constants/data";
import TabDetails from "./TabDetails";
import TabImage from "./TabImage";

const MobileTabSection = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const goNext = () => {
    setCurrentTab((index) => {
      if (index === tabContent.length - 1) return 0;
      return index + 1;
    });
  };
  const goBack = () => {
    setCurrentTab((index) => {
      if (index === 0) return tabContent.length - 1;
      return index - 1;
    });
  };
  return (
    <div className="lg:hidden flex items-center flex-col gap-20">
      <TabDetails
        item={tabContent[currentTab]}
        goBack={goBack}
        goNext={goNext}
      />
      <TabImage
        image={tabContent[currentTab].img}
        styles="w-[100%] sm:h-[34.8rem] "
      />
    </div>
  );
};

export default MobileTabSection;

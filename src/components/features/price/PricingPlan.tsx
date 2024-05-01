import { useState } from "react";
import { pricing } from "../../../constants/data";
import Section from "../../Section";
import PriceCard from "./PriceCard";

const PricingPlan = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);
  const [isYearly, setIsYearly] = useState<boolean>(false);

  const changePriceToMonth = () => {
    if (isMonthly) return;
    setIsMonthly(true);
    setIsYearly(false);
  };
  const changePriceToYear = () => {
    if (isYearly) return;
    setIsYearly(true);
    setIsMonthly(false);
  };

  return (
    <Section id="pricing-plan" withBottomDividers={false} withPlus={false}>
      <div className="">
        <div className="max-w-[20rem] h-[3.6rem]  bg-gradient-to-b from-purple-400 to-dark-1 rounded-2xl mx-auto grid place-items-center ">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-black rounded-2xl flex">
            <button
              onClick={changePriceToMonth}
              className={`rounded-2xl m-1 w-1/2 grid place-content-center ${
                isMonthly && "bg-dark-3"
              } `}
            >
              <p className="font-code font-semibold text-sm tracking-widest uppercase">
                Monthly
              </p>
            </button>
            <button
              onClick={changePriceToYear}
              className={`rounded-2xl m-1 w-1/2 flex items-center justify-center ${
                isYearly && "bg-dark-3"
              } `}
            >
              <p className="font-code font-semibold text-sm tracking-widest uppercase">
                Annually
              </p>
              <span className="ml-2 p-1 rounded-md bg-primary-1 text-xs font-code font-bold">
                -10%
              </span>
            </button>
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:flex-row  lg:gap-3 justify-center mt-14">
          {pricing.map((data) => (
            <PriceCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingPlan;

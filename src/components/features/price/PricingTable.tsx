import { pricePlansDetails } from "../../../constants/data";
import Section from "../../Section";
import PriceTableColums from "./PriceTableColums";
import PriceTableRow from "./PriceTableRow";
import PricingTableColumnsHeads from "./PricingTableColumnsHeads";

const PricingTable = () => {
  return (
    <Section id="pricing-table" withBottomDividers={false} withPlus={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%]  relative mx-auto">
        <h2 className="h2 text-center">Compare plans & features</h2>

        <div role="table " className="overflow-x-auto">
          <PriceTableRow>
            <PricingTableColumnsHeads />
          </PriceTableRow>

          {pricePlansDetails.map((plan) => (
            <PriceTableRow key={plan.id}>
              <PriceTableColums plan={plan} />
            </PriceTableRow>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default PricingTable;

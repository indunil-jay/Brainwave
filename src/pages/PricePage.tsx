import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingEnd from "../components/LandingEnd";
import PricingHero from "../components/features/price/PricingHero";
import PricingPlan from "../components/features/price/PricingPlan";
import PricingTable from "../components/features/price/PricingTable";

const PricePage = () => {
  return (
    <>
      <Header />
      <PricingHero />
      <PricingPlan />
      <PricingTable />
      {/* <LandingEnd /> */}
      <Footer />
    </>
  );
};

export default PricePage;

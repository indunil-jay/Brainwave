import CommunitySection from "../components/CommunitySection";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <CommunitySection />
      <FaqSection />
      {/* <LandingEnd /> */}
      <Footer />
    </>
  );
};

export default PricePage;

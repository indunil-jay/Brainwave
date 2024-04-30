import Creators from "../components/Creators";
import FeatureGrid from "../components/FeatureGrid";
import FeatureHero from "../components/FeatureHero";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingEnd from "../components/LandingEnd";

const FeaturePage = () => {
  return (
    <>
      <Header />
      <FeatureHero />
      <FeatureGrid />
      <Creators />
      <LandingEnd />
      <Footer />
    </>
  );
};

export default FeaturePage;

import Creators from "../components/Creators";
import FeatureGrid from "../components/FeatureGrid";
import FeatureHero from "../components/FeatureHero";
import FeatureOptions from "../components/FeatureOptions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingEnd from "../components/LandingEnd";

const FeaturePage = () => {
  return (
    <>
      <Header />
      <FeatureHero />
      <FeatureGrid />
      <FeatureOptions />
      <Creators />
      <LandingEnd />
      <Footer />
    </>
  );
};

export default FeaturePage;

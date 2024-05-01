import Creators from "../components/features/home/Creators";
import FeatureGrid from "../components/features/feature/FeatureGrid";
import FeatureHero from "../components/features/feature/FeatureHero";
import FeatureOptions from "../components/features/feature/FeatureOptions";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingEnd from "../components/LandingEnd";
import FeatureTestimonial from "../components/features/feature/FeatureTestimonial";

const FeaturePage = () => {
  return (
    <>
      <Header />
      <FeatureHero />
      <FeatureGrid />
      <FeatureOptions />
      <FeatureTestimonial />
      <Creators />
      <LandingEnd />
      <Footer />
    </>
  );
};

export default FeaturePage;

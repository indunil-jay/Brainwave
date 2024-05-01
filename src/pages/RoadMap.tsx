import Footer from "../components/Footer";
import Header from "../components/Header";
import LandingEnd from "../components/LandingEnd";
import RoadMapFlow from "../components/features/roadmap/RoadMapFlow";
import RoadmapHero from "../components/features/roadmap/RoadmapHero";

const RoadMap = () => {
  return (
    <>
      <Header />
      <RoadmapHero />
      <RoadMapFlow />
      <LandingEnd />
      <Footer />
    </>
  );
};

export default RoadMap;

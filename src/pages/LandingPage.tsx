import Collaboration from "../components/Collaboration";
import Discover from "../components/Discover";
import Features from "../components/Features";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TabSection from "../components/TabSection";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Discover />
      <Collaboration />
      <TabSection />
    </>
  );
};

export default LandingPage;

import Collaboration from "../components/Collaboration";
import Creators from "../components/Creators";
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
      <Creators />
    </>
  );
};

export default LandingPage;

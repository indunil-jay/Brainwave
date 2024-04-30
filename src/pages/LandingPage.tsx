import Collaboration from "../components/Collaboration";
import Creators from "../components/Creators";
import Discover from "../components/Discover";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LandingEnd from "../components/LandingEnd";
import Ourwork from "../components/Ourwork";
import Pricing from "../components/Pricing";
import TabSection from "../components/TabSection";
import Testimonial from "../components/Testimonial";

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
      <Pricing />
      <Testimonial />
      <Ourwork />
      <LandingEnd />
      <Footer />
    </>
  );
};

export default LandingPage;

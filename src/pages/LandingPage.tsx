import Collaboration from "../components/features/home/Collaboration";
import Creators from "../components/features/home/Creators";
import Discover from "../components/features/home/Discover";
import Features from "../components/features/home/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/features/home/Hero";
import LandingEnd from "../components/LandingEnd";
import Ourwork from "../components/features/home/Ourwork";
import Pricing from "../components/features/home/Pricing";
import TabSection from "../components/TabSection";
import Testimonial from "../components/features/home/Testimonial";

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

import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Guides from "../components/features/how-to-use/Guides";
import UseHero from "../components/features/how-to-use/UseHero";

const HowToUsePage = () => {
  return (
    <>
      <Header />
      <UseHero />
      <Guides />
      <Cta />
      <Footer />
    </>
  );
};

export default HowToUsePage;

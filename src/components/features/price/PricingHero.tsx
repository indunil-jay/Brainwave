import Section from "../../Section";

const PricingHero = () => {
  return (
    <Section id="pricing-hero" withBottomDividers={false} withPlus={false}>
      <div className="relative z-20 flex flex-col justify-center items-center mt-[8rem] ">
        <h1 className="h1 text-center">Pay once, use forever</h1>

        <p className="p1 px-[6%] md:px-[12%] lg:px-[18%] xl:px-[25%] 2xl:px-[30%] text-center mt-6 text-light-3">
          Get started with Brainwave - AI chat app today and experience the
          power of AI in your conversations!
        </p>
      </div>
    </Section>
  );
};

export default PricingHero;

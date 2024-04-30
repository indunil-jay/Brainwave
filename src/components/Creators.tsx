import { gradient, play, service1, service2, service3 } from "../assets";
import { generativeContents, videoIcons } from "../constants/data";
import Section from "./Section";
import GeneratingText from "./design/GeneratingText";
import IdeaCardLeftArrow from "./design/IdeaCardLeftArrow";
import IdeaCardRightArrow from "./design/IdeaCardRightArrow";

const Creators = () => {
  return (
    <Section id="creators" withBottomDividers={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto ">
        <div className="flex flex-col justify-center items-center my-8">
          <h2 className="h2 capitalize">Generative AI made for creators.</h2>
          <p className="p2 mt-3 text-light-4">
            Brainwave unlocks the potential of AI-powered applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-[15rem] h-[60rem] w-[60rem] left-[-8rem] -z-20 opacity-50  mix-blend-color-dodge">
            <img src={gradient} alt="gradient-background-image" />
          </div>

          <div className="h-[36.5rem] xl:h-[44.5rem] rounded-3xl z-10 border border-light-1/10 relative overflow-hidden p-8 lg:p-20 flex items-center">
            <div className="md:w-3/5 h-full flex items-center -z-10  absolute top-0 left-0  sm:-left-[7rem] md:left-[-1rem] lg:left-[-6.5rem] xl:-left-[8rem]  ">
              <img
                src={service1}
                className="w-full h-full object-cover object-right"
                alt="robot-image-1"
              />
            </div>

            <div className="py-10 max-w-[17rem] ml-auto relative  ">
              <h3 className="text-[2rem]  leading-[1.5rem] mb-4">
                Smartest AI
              </h3>
              <p className="p3 font-light mb-[3.125rem] text-light-4 ">
                {" "}
                Brainwave unlocks the potential of AI-powered applications
              </p>
              <ul className="text-base  font-light">
                {generativeContents.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start py-4 border-t border-dark-2"
                  >
                    <div className="w-[24px] h-[24px] flex items-center justify-center">
                      <img
                        src={item.symbol}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <p className="ml-4 ">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <GeneratingText />
          </div>

          {/*  */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
            <div className="relative border-light-1/10 rounded-3xl h-[38rem] w-full overflow-hidden bg-transparent">
              <div className="w-full h-full">
                <img
                  src={service2}
                  alt="robot-image-2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-12 py-6">
                <h2 className="h4">Photo editing</h2>
                <p className="p3">
                  Automatically enhance your photos using our AI app's photo
                  editing feature. Try it now!
                </p>
              </div>

              <div className="absolute top-[10%] w-full lg:left-[28%] ">
                <IdeaCardRightArrow />
              </div>
            </div>

            <div className="border-light-1/10 rounded-3xl  w-full overflow-hidden bg-dark-2 p-6 lg:p-12">
              <div className="lg:mt-10 mb-5">
                <h2 className="h4 mt-5">Video generation</h2>
                <p className="p3 mt-3 mb-12 lg:pr-16">
                  The world’s most powerful AI photo and video art generation
                  engine.What will you create?
                </p>

                <div className="flex justify-center flex-wrap gap-6 items-center ">
                  {videoIcons.map((item) => (
                    <div
                      key={item.id}
                      className={`${
                        item.active
                          ? "w-[4.5rem] rounded-xl aspect-square bg-conic-gradient flex justify-center items-center "
                          : ""
                      }`}
                    >
                      <div
                        className={`w-[4.4rem] rounded-xl aspect-square flex justify-center items-center ${
                          item.active ? "bg-dark-3" : "bg-dark-3/50 "
                        }`}
                      >
                        <img
                          src={item.symbol}
                          alt={`videobar-image-${item.id}`}
                          height={28}
                          width={28}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-10  bg-dark-1 border-light-1/10   border rounded-2xl overflow-hidden">
                <div className="w-full  backdrop-sepia-0 bg-light-1/10  ">
                  <img
                    src={service3}
                    className="h-full w-full object-cover backdrop-saturate-50"
                  />
                </div>

                <div className="absolute top-[15%] left-[8%]">
                  <IdeaCardLeftArrow
                    text="Video generated!"
                    lastSeen="just Now"
                  />
                </div>

                <div className="absolute flex items-center bottom-[1rem] px-10 left-0 right-0">
                  <img
                    src={play}
                    alt="play-button-image"
                    width={24}
                    height={24}
                  />

                  <div className="w-full h-[1.5px] bg-gradient-to-r from-primary-1 to-light-1/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Creators;

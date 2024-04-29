import { FaAngleRight } from "react-icons/fa6";
import Section from "./Section";
import { benefits } from "../constants/data";
import { gradient } from "../assets";

const Features = () => {
  return (
    <Section id="features" styles="-mt-2" withBottomDividers={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] mx-auto">
        <h2 className="h2 text-center px-[3%] sm:px-[12%] md:px-[20%] lg:px-[24%] xl:px-[24.5%] 2xl:px-[28%]">
          Chat Smarter, Not Harder with Brainwave
        </h2>

        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
          <div className="absolute top-[65%] left-[10%] -translate-x-1/2 -translate-y-1/2 -z-20 opacity-50  mix-blend-color-dodge">
            <img src={gradient} alt="gradient-background-image" />
          </div>
          <div className="absolute top-[15%] right-[10%] -translate-x-1/2 -translate-y-1/2 -z-20 opacity-50  mix-blend-color-dodge">
            <img src={gradient} alt="gradient-background-image" />
          </div>
          {benefits.map((card) => {
            return (
              <div
                className="group relative h-[24rem] flex justify-center  p-2 border rounded-3xl  shadow-2xl shadow-blue-500/20"
                key={card.id}
              >
                <div className="p-[2.4rem] flex flex-col justify-around  rounded-3xl">
                  <div>
                    <h3 className="font-medium text-[1.5rem] leading-7 mb-5 capitalize">
                      {card.title}
                    </h3>
                    <p className="mb-6 text-light-3 font-base leading-6 font-light">
                      {card.text}
                    </p>
                  </div>

                  <div className="flex justify-between items-center ">
                    <div className="w-[3rem] h-[3rem]">
                      <img
                        src={card.iconUrl}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="flex items-center cursor-pointer  px-3 py-3 rounded-xl gap-4 ">
                      <a className="font-code uppercase text-xs font-semibold">
                        {" "}
                        Explore more
                      </a>
                      <FaAngleRight fontSize={16} />
                    </div>
                  </div>
                </div>

                <div className="absolute rounded-3xl -z-10 overflow-hidden  inset-0  opacity-0 transition-opacity group-hover:opacity-10 ">
                  <img
                    src={card.imageUrl}
                    alt="background image"
                    className="w-full h-full object-contain "
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="mt-20 z-20 isolate">
        <h2 className="h2 text-center px-[3%] sm:px-[12%] md:px-[20%] lg:px-[24%] xl:px-[24.5%] 2xl:px-[28%]">
          Chat Smarter, Not Harder with Brainwave
        </h2>

     
        <div className="mb-20 mt-20">
      

          <div className="w-full ">
            <div className="grid grid-cols-3">
              {benefits.map((card) => {
                return (
                  <div
                    className="group relative flex items-center justify-center flex-shrink-0   flex-grow-0 w-full h-full p-2 border rounded-3xl  shadow-2xl shadow-blue-500/20"
                    key={card.id}
                  >
              
                    <div className="p-[2.4rem] flex flex-col justify-around  rounded-3xl">
                      <div>
                        <h3 className="font-medium text-[1.5rem] leading-7 mb-5 capitalize">
                          {card.title}
                        </h3>
                        <p className="mb-6 text-light-3 font-base leading-6 font-light">
                          {card.text}
                        </p>
                      </div>

                      <div className="flex justify-between items-center ">
                        <div className="w-[3rem] h-[3rem]">
                          <img
                            src={card.iconUrl}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        <div className="flex items-center cursor-pointer  px-3 py-3 rounded-xl gap-4 ">
                          <a className="font-code uppercase text-xs font-semibold">
                            {" "}
                            Explore more
                          </a>
                          <FaAngleRight fontSize={16} />
                        </div>
                      </div>
                    </div>

                  
                    <div className="absolute rounded-3xl -z-10 overflow-hidden  inset-0  opacity-0 transition-opacity group-hover:opacity-10 ">
                      <img
                        src={card.imageUrl}
                        alt="background image"
                        className="w-full h-full object-contain "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}
    </Section>
  );
};

export default Features;

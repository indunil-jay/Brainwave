import { brainwaveSymbol, check, curve1, curve2 } from "../assets";
import { collabApps, collabContent, collabText } from "../constants/data";
import Button from "./Button";
import Section from "./Section";

const Collaboration = () => {
  return (
    <Section id="collaboration">
      <div className="2xl:w-[80%] xl:w-[88%] w-[80%]  relative mx-auto lg:my-24 mb-[20rem]">
        <div className="relative grid grid-cols-1  gap-[10rem] lg:gap-0  lg:grid-cols-[1.25fr_2fr]">
          <div className="pr-2 ">
            <h2 className="h2 mb-4 md:mb-8">
              AI chat app for seamless collaboration
            </h2>
            <ul className="max-w-[22rem] mb-10 md:mb-14">
              {collabContent.map((item) => {
                return (
                  <li className="mb-3 py-3" key={item.id}>
                    <div className="flex items-center">
                      <img src={check} width={24} height={24} alt={check} />
                      <h5 className="h5 ml-5">{item.title}</h5>
                    </div>
                    {item.text && (
                      <p className="p2 mt-3 text-light-4">{item.text}</p>
                    )}
                  </li>
                );
              })}
            </ul>
            <Button>Try it Now</Button>
          </div>

          <div className="relative flex flex-col items-center  space-y-20 lg:justify-self-end">
            <p className="hidden lg:block  p2 lg:w-[22rem] mt-8 mx-auto text-light-4">
              {collabText}
            </p>

            <div className="absolute bg-conic-gradient w-[6rem] h-[6rem] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
            <div className="absolute bg-dark-1 w-[5rem] h-[5rem] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center">
              <img
                src={brainwaveSymbol}
                className="w-full h-full object-none"
              />
            </div>
            <div className="absolute border border-light-1/15 w-[10.5rem] rounded-full aspect-square top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 " />
            <div className="absolute border border-light-1/15 w-[22.5rem] rounded-full aspect-square top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 " />

            <ul className="absolute border border-light-1/15 w-[22.5rem] rounded-full aspect-square top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-dark-2 border border-light-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      src={app.icon}
                      className="m-auto "
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden absolute top-[64%]  xl:-right-[18%]  2xl:-right-[16%]  pointer-events-none xl:block">
          <img src={curve2} width={162} height={76} alt="Curve 2" />
        </div>

        <div className="hidden absolute top-[64%] xl:left-[14%]  2xl:left-[20%]   mr-10 pointer-events-none xl:block">
          <img src={curve1} width={522} height={182} alt="Curve 1" />
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;

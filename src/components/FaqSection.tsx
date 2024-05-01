import { useState } from "react";
import Section from "./Section";
import { accordingdata } from "../constants/data";

const FaqSection = () => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(null);

  const handleOpen = (openId: number) => {
    setCurrentOpen((currentId) => (currentId === openId ? null : openId));
  };

  return (
    <Section id="faq" withBottomDividers={false} withPlus={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8">
          <h2 className="h2">Frequently asked questions</h2>
          <p className="p3 mt-6">
            Haven't found what you're looking for?{" "}
            <a
              href="#"
              className="hover:underline underline-offset-2 transition-colors hover:text-primary-2"
            >
              Contact us
            </a>
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {accordingdata.map((data, index) => (
            <div key={data.id} className="flex flex-col gap-4">
              <div
                className="flex items-center justify-between px-6 py-3 bg-dark-2 cursor-pointer"
                onClick={() => handleOpen(index)}
              >
                <h5 className="h5">{data.title}</h5>
                <button className="text-[1.5rem]">
                  {currentOpen === index ? "-" : "+"}
                </button>
              </div>
              <div
                className={`p3  bg-dark-2 overflow-hidden transition-opacity duration-300 ${
                  currentOpen === index
                    ? "opacity-100 max-h-[500px]"
                    : "opacity-0 max-h-0"
                }`}
              >
                {data.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default FaqSection;

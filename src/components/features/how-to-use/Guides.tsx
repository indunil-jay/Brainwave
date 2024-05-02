import { useState } from "react";
import { guides, sideNavdata } from "../../../constants/data";
import Button from "../../Button";
import Section from "../../Section";
import GuidesCard from "./GuidesCard";
import Search from "./Search";
import { Link as ScrollLink } from "react-scroll";

const Guides = () => {
  const [currentOpen, setCurrentOpen] = useState<number | null>(0);
  const handleOpen = (openId: number) => {
    setCurrentOpen((currentId) => (currentId === openId ? null : openId));
  };
  return (
    <Section id="guides" withBottomDividers={false} withPlus={false}>
      <div className="container mt-[-10rem] relative">
        <Search />

        <div className="mt-[5rem]">
          <div className="grid grid-cols-1 lg:grid-cols-[24.5rem_1fr] ">
            <div className="bg-dark-1">
              {sideNavdata.map((data, index) => (
                <div className="mb-5" key={data.id}>
                  <button
                    className="flex items-start py-3.5"
                    onClick={() => handleOpen(index)}
                  >
                    <div
                      className={`relative w-6 h-6 my-0.5 mr-5 p-0.5 bg-dark-2 rounded-md ${
                        currentOpen === index &&
                        "border-light-1/15 border-[2px]"
                      } `}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`inline-block align-top opacity-100 transition-opacity relative z-1 w-full ${
                          currentOpen === index &&
                          "transition-transform rotate-90 "
                        }`}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div className="text-xl">{data.title}</div>
                  </button>

                  <div
                    className={`transition-all   ${
                      currentOpen === index ? "grid grid-rows-[1fr]" : " hidden"
                    }`}
                  >
                    <ul className="overflow-hidden">
                      {data.links.map((link, index) => (
                        <li key={index}>
                          <button className="inline-block">
                            <ScrollLink
                              to={link.url}
                              smooth={true}
                              duration={500}
                              className="font-light text-[0.875rem] leading-6 md:text-base block py-3 pl-11 text-light-3 transition-colors hover:text-primary-1 cursor-pointer"
                            >
                              {link.name}
                            </ScrollLink>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h2 className="h2 py-6 ml-8  border-b-[1px] capitalize border-b-light-1/10">
                Getting started
              </h2>

              <div className="lg:ml-0 xl:ml-8">
                {guides.map((guide) => (
                  <GuidesCard key={guide.id} guide={guide} />
                ))}
              </div>
              <div className="flex items-center justify-center">
                <Button>Read more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Guides;

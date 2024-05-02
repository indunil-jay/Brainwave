import { Link } from "react-router-dom";
import { brainwaveWhiteSymbol } from "../assets";
import { navigation, socials } from "../constants/data";
import Section from "./Section";

const Footer = () => {
  return (
    <Section id="footer" styles="pt-10 pb-0 ">
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%] relative mx-auto lg:grid grid-cols-[10rem_1fr] lg:place-items-end">
        <div className="flex flex-col justify-center items-center  w-full ">
          <div className="w-[6rem] aspect-square mb-2">
            <img
              src={brainwaveWhiteSymbol}
              alt="brainwave-company-logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="font-grotesk mb-2 leading-7"> Brainwave.inc 2024</p>

          <div className="flex gap-2 items-center lg:flex-row lg:justify-end lg:items-end  ">
            {socials.map((item) => (
              <div key={item.id} className="group ">
                <a
                  href={item.url}
                  className="w-[2rem] h-[2rem] aspect-square rounded-xl bg-light-1/10 grid place-items-center "
                >
                  <img
                    src={item.iconUrl}
                    width={16}
                    height={16}
                    className=""
                    alt={`social-media-icon-${item.id}`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        <nav className="w-full  ">
          <div className="flex flex-col items-center lg:flex-row lg:justify-end lg:items-end ">
            {navigation.map((item) => (
              <Link
                key={item.id}
                aria-label={`button for go to ${item.name}`}
                to={item.url}
                className={`lg:px-5 xl:px-8 py-4 font-code uppercase text-xs font-semibold transition-colors hover:text-primary-1 leading-5 `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
      <Section id="line">{null}</Section>
    </Section>
  );
};

export default Footer;

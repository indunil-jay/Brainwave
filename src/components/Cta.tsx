import { helpimg } from "../assets";
import Section from "./Section";

const Cta = () => {
  return (
    <Section id="cta" withBottomDividers={true} withPlus={false}>
      <div className="2xl:w-[72%] xl:w-[84%] w-[94%]  relative mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-8">
          <div className="w-full h-full grid place-items-center p-10">
            <img
              src={helpimg}
              alt="cta-bg-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="content-center  ml-4  lg:ml-10">
            <h2 className="h2  mb-6">Need help?</h2>
            <p className="p3">Cant find your answer, contact us</p>

            <div className="mt-8 space-y-8">
              <div className="flex gap-5 items-center">
                <div className="w-[4.6rem] h-[4.8rem] border border-light-1/10 grid place-content-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-primary-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 flex-col">
                  <h5 className="text-[1.25rem] font-semibold">
                    Join our community
                  </h5>
                  <p className="p3">Discuss anything with other users</p>
                </div>
              </div>
              <div className="flex gap-5 items-center">
                <div className="w-[4.6rem] h-[4.8rem] border border-light-1/10 grid place-content-center rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-primary-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                    />
                  </svg>
                </div>
                <div className="flex gap-2 flex-col">
                  <h5 className="text-[1.25rem] font-semibold">Email us</h5>
                  <p className="p3">hello@brainwave.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Cta;

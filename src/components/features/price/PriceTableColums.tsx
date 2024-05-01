import { GoQuestion } from "react-icons/go";

type TableColumProps = {
  plan: {
    id: number;
    title: string;
    description: string;
    basic: string | null;
    premium: string | null;
    enterprise: string;
    color: string;
    isText?: boolean;
  };
};

const PriceTableColums = ({ plan }: TableColumProps) => {
  return (
    <>
      <div
        role="cell"
        className="py-1 w-full h-[4.6rem] flex items-center gap-3"
      >
        <span className="text-base leading-[1.5rem] font-light text-light-1">
          {" "}
          {plan.title}
        </span>

        <div className="group">
          <GoQuestion
            size={22}
            className="text-light-1/20 group cursor-pointer "
          />
          <div className="absolute top-[-1rem]  left-[18rem]  group-hover:block hidden min-h-[6rem] w-[22rem] bg-white rounded-2xl p-3">
            <p className="text-dark-3 text-sm ">{plan.description}</p>
          </div>
        </div>
      </div>
      <div
        role="cell"
        className="py-1 w-full h-[4.6rem] flex items-center  pointer-events-none "
      >
        {plan.basic && (
          <div>
            {plan.isText ? (
              <p>{plan.basic}</p>
            ) : (
              <span
                className={`w-[2rem] h-[2rem] aspect-square rounded-full  ${
                  plan.color && plan.color
                } grid place-content-center`}
              >
                <img
                  src={plan.basic}
                  alt={`icon-${plan.id}`}
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        )}
      </div>
      <div
        role="cell"
        className="py-1 w-full h-[4.6rem] flex items-center pointer-events-none "
      >
        {" "}
        {plan.premium && (
          <div>
            {plan.isText ? (
              <p>{plan.premium}</p>
            ) : (
              <span
                className={`w-[2rem] h-[2rem] aspect-square rounded-full  ${
                  plan.color && plan.color
                } grid place-content-center`}
              >
                <img
                  src={plan.premium}
                  alt={`icon-${plan.id}`}
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        )}
      </div>
      <div
        role="columnheader"
        className="py-1 w-full h-[4.6rem] flex items-center pointer-events-none "
      >
        {plan.enterprise && (
          <div>
            {plan.isText ? (
              <p>{plan.enterprise}</p>
            ) : (
              <span
                className={`w-[2rem] h-[2rem] aspect-square rounded-full  ${
                  plan.color && plan.color
                } grid place-content-center`}
              >
                <img
                  src={plan.enterprise}
                  alt={`icon-${plan.id}`}
                  width={20}
                  height={20}
                />
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default PriceTableColums;

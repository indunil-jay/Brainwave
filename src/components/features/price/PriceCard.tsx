import { check } from "../../../assets";
import Button from "../../Button";

type Props = {
  data: {
    id: number;
    titleColor: string;
    title: string;
    description: string;
    price: string | null;
    btnText: string;
    features: string[];
  };
};

const PriceCard = ({ data }: Props) => {
  return (
    <div
      className="max-w-[25rem] h-[40rem]  border border-light-1/10 rounded-3xl px-4 py-8 mb-[10rem] md:mb-[4rem] lg:mb-0"
      key={data.id}
    >
      <div>
        <h4 className={`h3 mb-6 ${data.titleColor && data.titleColor}`}>
          {data.title}
        </h4>
        <p className="p3 break-words min-h-[5rem]">{data.description}</p>

        <h1 className="h1 mb-4 min-h-[5rem]">
          {data.price ? `$${data.price}` : null}
        </h1>

        <div className="flex items-center justify-center">
          <Button styles="w-[90%] justify-center" whiteBtn={true}>
            {data.btnText}
          </Button>
        </div>

        <div className="mt-6">
          {data.features.map((feature, index) => {
            return (
              <div
                className="flex items-start gap-4 border-t  border-light-1/10 py-4"
                key={index}
              >
                <div className="w-[2rem] h-[2rem] aspect-square flex items-center justify-center  p-0.5">
                  <img
                    src={check}
                    alt={`icon-corrected-${feature}`}
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="p2 text-[15px] text-light-1/80  hyphens-auto">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

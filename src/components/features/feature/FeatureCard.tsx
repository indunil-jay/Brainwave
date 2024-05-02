import { FaAngleRight } from "react-icons/fa";
import Button from "../../Button";
import { Link } from "react-router-dom";

type FeatureCardProps = {
  card: {
    id: string;
    title: string;
    text: string;
    iconUrl: string;
    imageUrl: string;
    url: string;
  };
};

const FeatureCard = ({ card }: FeatureCardProps) => {
  return (
    <div
      className="group  relative h-[24rem] flex justify-center  p-2 border rounded-3xl  shadow-2xl shadow-blue-500/20"
      key={card.id}
    >
      <div className="p-[2.4rem] flex flex-col justify-around  rounded-3xl">
        <div>
          <h3 className="h5 mb-5 capitalize">{card.title}</h3>
          <p className="mb-6 p2 bg-transparent">{card.text}</p>
        </div>

        <div className="flex justify-between items-center ">
          <div className="w-[3rem] h-[3rem]">
            <img src={card.iconUrl} className="w-full h-full object-contain" />
          </div>

          <Link
            to={card.url}
            className="flex items-center cursor-pointer  px-3 py-3 rounded-xl gap-4 "
            aria-label="feature-card-buttons-container"
          >
            <Button
              styles="font-code uppercase text-xs font-semibold border-none"
              ariaLabel="Explore more button"
              whiteBtn={true}
            >
              {" "}
              Explore more
            </Button>
            <FaAngleRight fontSize={16} />
          </Link>
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
};

export default FeatureCard;

import Brackets from "../../design/Brackets";

type RoadMapCardProp = {
  item: {
    id: number;
    date: string;
    icon: string;
    title: string;
    description: string;
  };
};

const RoadMapCard = ({ item }: RoadMapCardProp) => {
  return (
    <li className="relative mb-15 md:flex md:mb-0 mx-6 md:mx-8 lg:mx-12 xl:mx-0">
      <div className="flex items-center h-[3.5rem] mb-3 md:w-[16rem] md:h-[6.5rem] md:mb-0 lg:h-[9.5rem]">
        <div className="flex items-center mr-8">
          <button aria-label={`map-btn-${item.title}`}>
            <Brackets>{item.date}</Brackets>
          </button>
        </div>
        <div className="bg-dark-3 h-[1px] w-[8rem] md:flex-1 ">&nbsp;</div>
      </div>

      <div className="md:flex md:flex-1 md:p-6 md:border-l md:border-dark-3 lg:py-12 lg:px-20">
        <div className="mb-6 md:flex-shrink-0 md:w-[3.5rem] md:mr-6 md:mb-0">
          <div className="w-[4.5rem] h-[4.5rem] aspect-square rounded-full bg-dark-2 flex  justify-center ite">
            <img
              src={item.icon}
              width={50}
              height={50}
              className="inline-block align-top  transition-opacity opacity-100 "
              alt={`icon-map-${item.title}`}
            />
          </div>
        </div>
        <div className="md:flex-1">
          <div className="mb-5 md:flex md:items-center md:justify-between md:min-h-[3.5rem] md:mb-6">
            <h5 className="h5">{item.title}</h5>
          </div>
          <p className="p3 text-light-4">{item.description}</p>
        </div>
      </div>
    </li>
  );
};

export default RoadMapCard;

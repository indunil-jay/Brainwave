import { featureOptions1 } from "../../../constants/data";

const FeatureOptionDataCard = () => {
  return (
    <div className="lg:h-[37.5rem] row-start-2  max-w-[34.375rem]  w-full content-center   lg:row-auto ">
      <div className="pl-[1rem] md:pl-[4.5rem] h-full flex flex-col lg:justify-center ">
        <h2 className="h2 mb-4 md:mb-8">Customization Options</h2>

        <ul className="">
          {featureOptions1.map((item) => (
            <li
              key={item.id}
              className="flex flex-col border-b border-b-light-1/10 py-6  "
            >
              <div className="flex items-center gap-4">
                <div className="w-[2rem] h-[2rem] aspect-square rounded-full flex items-center justify-center ">
                  <img
                    src={item.icon}
                    alt={`check-image`}
                    width={24}
                    height={24}
                    className="inline-block"
                  />
                </div>
                <p className="p1 clear-start font-[500]">{item.option}</p>
              </div>

              {item.description && (
                <p className="p3 mt-3 lg:pr-20">{item.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FeatureOptionDataCard;

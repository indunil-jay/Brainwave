import { featuregridbg } from "../../../assets";

const FeatureOptionBgCard = () => {
  return (
    <div className=" h-auto lg:h-[37.5rem] ">
      <div className="max-w-[34.375rem] h-full rounded-3xl overflow-hidden">
        <img
          src={featuregridbg}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default FeatureOptionBgCard;

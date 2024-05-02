import { LuTriangleRight } from "react-icons/lu";
import { brainwaveWhiteSymbol } from "../../assets";

const IdeaCardLeftArrow = ({
  text,
  lastSeen,
}: {
  text: string;
  lastSeen: string;
}) => {
  return (
    <div className="bg-dark-2 w-[15.8rem] h-[4.825rem] rounded-xl relative flex flex-col  px-5  ">
      <p className="text-base leading-6  py-3  tracking-wider  font-code ">
        {text}
      </p>
      <p className="uppercase text-[10px] leading-6  tracking-wider  font-grotesk  text-end">
        {lastSeen}
      </p>
      <div className="absolute left-[-.9rem] bottom-[-0.25rem]">
        <LuTriangleRight size={36} className="fill-dark-2 text-dark-2 " />
      </div>
      <div className="absolute bottom-[-1rem] w-[2.5rem] h-[2.5rem] bg-primary-1 rounded-xl flex justify-center items-center">
        <img
          src={brainwaveWhiteSymbol}
          alt="brainwave-white-image"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default IdeaCardLeftArrow;

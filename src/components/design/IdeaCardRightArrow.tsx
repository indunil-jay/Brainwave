import { LuTriangleRight } from "react-icons/lu";

const IdeaCardRightArrow = () => {
  return (
    <div className="bg-dark-1 w-[18rem] h-[5.25rem] rounded-xl relative flex items-center justify-center">
      <p className="text-base leading-6 px-6  tracking-wider  font-code ">
        Hey Brainwave, enhance this photo
      </p>
      <div className="absolute right-[-.9rem] bottom-[-0.1rem]">
        <LuTriangleRight
          size={36}
          className="fill-dark-1 text-dark-1 rotate-90"
        />
      </div>
    </div>
  );
};

export default IdeaCardRightArrow;

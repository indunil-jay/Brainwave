import { loading } from "../../assets";

const GeneratingText = () => {
  return (
    <div className="absolute bottom-5 left-0 right-0 z-50 flex gap-3 md:gap-8 items-center w-[88%] md:w-[60%] mx-auto bg-dark-2/70  px-4 md:px-6 py-4 rounded-full">
      <div className="w-5 h-5">
        <img src={loading} alt="loading images" />
      </div>
      <span> AI is generating</span>
    </div>
  );
};

export default GeneratingText;

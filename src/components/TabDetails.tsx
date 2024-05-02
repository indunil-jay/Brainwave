import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Button from "./Button";
import Brackets from "./design/Brackets";
import { Link } from "react-router-dom";

type Props = {
  item: {
    [key: string]: string | number;
  };
  goBack?: () => void;
  goNext?: () => void;
};

const TabDetails = ({ item, goBack, goNext }: Props) => {
  return (
    <div className="relative min-h-[26rem] md:min-h-[20rem] px-10 lg:h-0 lg:px-0">
      <Brackets>How It work : 01. </Brackets>
      <h2 className="h2 mb-5">{item.title}</h2>
      <p className="p2 text-light-3 mb-7">{item.text}</p>
      <Link to="/signin">
        <Button whiteBtn={true} withArrow={true} ariaLabel="connect-btn">
          {item.btnText}
        </Button>
      </Link>

      <div className="flex gap-5 absolute bottom-0 lg:hidden">
        <button
          aria-label="goback-btn-tab"
          onClick={goBack}
          className="group w-[3.8rem] h-[3.8rem] rounded-full bg-dark-7/40 flex items-center justify-center"
        >
          <HiArrowLeft
            size={24}
            className="group-hover:text-light-1/80  text-light-1/50"
          />
        </button>
        <button
          aria-label="gonext-btn-tab"
          onClick={goNext}
          className="group w-[3.8rem] h-[3.8rem] rounded-full bg-dark-7/40 flex items-center justify-center"
        >
          <HiArrowRight
            size={24}
            className="group-hover:text-light-1/80  text-light-1/50"
          />
        </button>
      </div>
    </div>
  );
};

export default TabDetails;

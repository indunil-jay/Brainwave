import { grid, iconslist, loading, musicbg } from "../assets";
import { notificationImages } from "../constants/data";
import Brackets from "./design/Brackets";
import IdeaCardLeftArrow from "./design/IdeaCardLeftArrow";

type Props = {
  card: {
    id: string;
    title: string;
    description: string;
    icon: string;
    iconText: string;
    img?: string;
  };
};

const WorksCard = ({ card }: Props) => {
  const isEven = +card.id % 2 === 0;

  return (
    <div
      className={`w-full  z-0  rounded-3xl grid place-items-center h-[30rem] sm:h-[38rem] md:h-[45rem] lg:h-[50rem] ${
        !isEven ? "lg:mt-[-5rem]" : "mt-[0rem]"
      } ${+card.id === 1 ? "bg-conic-gradient" : "bg-light-1/10"}`}
    >
      <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-dark-1 rounded-3xl  relative overflow-hidden">
        <div className="absolute left-[0rem] top-[-0.5rem] w-full aspect-square pointer-events-none">
          <img
            src={grid}
            className="w-full h-full object-contain"
            alt="grid-background-image"
          />
        </div>

        {+card.id === 1 && (
          <>
            <div className="absolute left-[.8rem] top-[6rem] md:left-[6rem]  pointer-events-none ">
              <IdeaCardLeftArrow
                text="Morning! Ask me anything"
                lastSeen="1M Ago"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  p-14 pointer-events-none">
              <img
                src={musicbg}
                alt="musice-background-image"
                className="w-full h-full  inline-block scale-150"
              />
            </div>
          </>
        )}

        {+card.id === 4 && (
          <>
            <div className="absolute w-full top-[8rem] md:top-[12rem] left-1/2 -translate-x-1/2 -translate-y-1/2  px-6 md:px-16">
              <div className=" w-full border bg-dark-1 rounded-2xl flex items-center justify-between px-4 py-2.5 pointer-events-none">
                <div className="flex gap-4 items-center">
                  <img
                    src={loading}
                    width={20}
                    height={20}
                    className=""
                    alt={`works-card-${card.id}`}
                  />
                  <p className="p1 text-light-1/80">Connection...|</p>
                </div>
                <ul className="flex -m-0.5">
                  {notificationImages.map((img, index) => {
                    return (
                      <li
                        key={index}
                        className="flex  -m-0.5 w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                      >
                        <img
                          src={img}
                          className="w-full"
                          alt={`bf-works-${index}`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="absolute top-[44%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 md:p-14 pointer-events-none">
              <img
                src={iconslist}
                alt="icons-list-image"
                className="w-full h-full"
              />
            </div>
          </>
        )}

        <div className="absolute top-0 left-0 p-6 md:p-14 pointer-events-none">
          <Brackets>May 2024</Brackets>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full  p-14 pointer-events-none">
          <img src={card.img} alt={`works-img-${card.title}`} />
        </div>

        <div className="absolute top-0 right-0  p-6 md:p-14 pointer-events-none">
          <div className="w-auto h-[1.75rem] bg-light-1 rounded-md flex justify-between items-center px-5 gap-4">
            <div className="w[1.5rem] aspect-square">
              <img src={card.icon} alt={`works-btn-${card.title}`} />
            </div>
            <p className="font-grotesk text-sm text-dark-5 uppercase">
              {card.iconText}
            </p>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 p-6  md:p-14 pointer-events-none">
          <h3 className="h3 mb-4 capitalize">{card.title}</h3>
          <p className="p2 text-light-2 break-words">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorksCard;

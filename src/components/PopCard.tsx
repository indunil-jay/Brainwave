import { notification1 } from "../assets";
import { notificationImages } from "../constants/data";

type PropS = {
  title: string;
  styles?: string;
};

const PopCard = ({ title, styles }: PropS) => {
  return (
    <div
      className={`${
        styles || ""
      } flex items-center p-4 pr-6  bg-light-6/40 backdrop-blur border border-light-1/10 rounded-2xl gap-5 pointer-events-none`}
    >
      <div className="w-[4rem] h-[4rem] rounded-xl overflow-hidden">
        <img
          src={notification1}
          className=" h-full w-full object-contain"
          alt="img"
        />
      </div>

      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((img, index) => {
              return (
                <li
                  key={index}
                  className="flex  -m-0.5 w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
                >
                  <img src={img} className="w-full" alt={img} />
                </li>
              );
            })}
          </ul>
          <div className="body-2 text-light-5">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default PopCard;

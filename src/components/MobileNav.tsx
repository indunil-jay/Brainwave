import { navigation } from "../constants/data";
import { background } from "../assets";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-dark-3 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-dark-3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-dark-3 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0  left-5   md:left-7 w-0.5 h-full bg-dark-3"></div>
      <div className="absolute top-0  right-5  md:right-7 w-0.5 h-full bg-dark-3"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

type Props = {
  onClick: () => void;
};

const MobileNav = ({ onClick }: Props) => {
  return (
    <div className="fixed overflow-hidden w-full h-full flex justify-center items-start bg-dark-1 z-40  top-0 left-0 right-0 bottom-0 lg:hidden">
      <div className="flex flex-col z-50   items-center mt-[14rem]  gap-14">
        {navigation.map((item) => (
          <div key={item.id}>
            <a
              onClick={onClick}
              href={item.url}
              className={`inline-block font-code uppercase text-lg "text-light-1"  transition-colors hover:text-primary-1 leading-5 `}
            >
              {item.name}
            </a>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 opacity-[.05]">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>
      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};

export default MobileNav;

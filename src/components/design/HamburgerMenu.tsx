import { LiaBarsSolid, LiaTimesSolid } from "react-icons/lia";

type Props = {
  isOpen: boolean;
};
const HamburgerMenu = ({ isOpen }: Props) => {
  return (
    <span className="lg:hidden text-light-1/50 transition-colors group-hover:text-light-1">
      {isOpen ? (
        <LiaTimesSolid fontSize={20} />
      ) : (
        <LiaBarsSolid fontSize={20} />
      )}
    </span>
  );
};

export default HamburgerMenu;

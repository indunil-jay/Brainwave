import { FaPlus } from "react-icons/fa";

type Props = {
  id: string;
  children: React.ReactNode;
  withPlus?: boolean;
};

const Section = ({ children, withPlus = true, id }: Props) => {
  return (
    <section
      id={id}
      className="relative px-6 py-10  xl:px-8 2xl:px-10 overflow-hidden"
    >
      <div className="absolute w-[1px] top-0 left-5 bg-dark-3 h-full"></div>
      <div className="absolute w-[1px] top-0 right-5 bg-dark-3 h-full"></div>

      {withPlus && (
        <>
          <div className="absolute top-0 left-3  h-full">
            <FaPlus className="text-light-3" />
          </div>
          <div className="absolute  top-0 right-3 h-full">
            <FaPlus className="text-light-3" />
          </div>
        </>
      )}

      {children}
    </section>
  );
};

export default Section;

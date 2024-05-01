import { FaPlus } from "react-icons/fa";

type Props = {
  id: string;
  children: React.ReactNode;
  withPlus?: boolean;
  withBottomDividers?: boolean;
  styles?: string;
};

const Section = ({
  children,
  withPlus = true,
  id,
  styles,
  withBottomDividers = true,
}: Props) => {
  return (
    <section
      id={id}
      className={`relative px-6 py-10  xl:px-8 2xl:px-10  overflow-x-clip   ${styles} `}
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
      {withBottomDividers && (
        <div className="absolute w-[calc(100%-40px)] left-5 right-5 mx-auto h-[1px] bottom-0  bg-dark-3 "></div>
      )}
    </section>
  );
};

export default Section;

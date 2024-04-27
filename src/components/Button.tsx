import { LiaArrowRightSolid } from "react-icons/lia";

type Props = {
  children: React.ReactNode;
  styles?: string;
  href?: string;
  withArrow?: boolean;
  whiteBtn?: boolean;
  onClick?: () => void;
};

const Button = ({
  children,
  styles,
  href,
  onClick,
  withArrow = false,
  whiteBtn,
}: Props) => {
  const classBtn = `group outline-none rounded-md font-code font-semibold py-2 xl:py-3  px-3.5  xl:px-4  2xl:px-6  flex items-center  text-xs leading-5 uppercase transition-colors border  border-light-1/50  hover:text-light-1 ${styles} ${
    whiteBtn ? "hover:text-dark-1 hover:bg-light-1" : ""
  }`;
  const classSpan = `inline-block ${
    withArrow ? "flex items-center  gap-2" : ""
  } `;

  if (href) {
    return (
      <a href={href} className={classBtn}>
        <span className={classSpan}>
          {children}
          {withArrow && <LiaArrowRightSolid />}
        </span>
      </a>
    );
  }

  return (
    <button className={classBtn} onClick={onClick}>
      <span className={classSpan}>
        {" "}
        {children}
        {withArrow && <LiaArrowRightSolid />}
      </span>
    </button>
  );
};

export default Button;

import { LiaArrowRightSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  styles?: string;
  href?: string;
  withArrow?: boolean;
  whiteBtn?: boolean;
  onClick?: () => void;
  ariaLabel?: string; // New prop for providing custom aria-label
};

const Button = ({
  children,
  styles,
  href,
  onClick,
  withArrow = false,
  whiteBtn,
  ariaLabel,
}: Props) => {
  const white = whiteBtn
    ? "hover:text-dark-1 hover:bg-light-1"
    : "hover:text-light-1";

  const classBtn =
    `group outline-none focus:outline-none focus-visible:ring   rounded-md font-code font-semibold py-2 xl:py-3 px-3.5 xl:px-4 2xl:px-6 flex items-center text-xs leading-5 uppercase transition-all border border-light-1/50 ${styles} ` +
    white;

  const classSpan = `inline-block ${
    withArrow ? "flex items-center gap-2" : ""
  }`;

  if (href) {
    return (
      <Link to={href} className={classBtn} aria-label={ariaLabel}>
        <span className={classSpan}>
          {children}
          {withArrow && <LiaArrowRightSolid />}
        </span>
      </Link>
    );
  }

  return (
    <button className={classBtn} onClick={onClick} aria-label={ariaLabel}>
      <span className={classSpan}>
        {children}
        {withArrow && <LiaArrowRightSolid />}
      </span>
    </button>
  );
};

export default Button;

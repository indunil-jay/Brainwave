type Props = {
  children: React.ReactNode;
  styles?: string;
  href?: string;
  onClick?: () => void;
};

const Button = ({ children, styles, href, onClick }: Props) => {
  const classBtn = `group  outline-none   rounded-md  font-code font-semibold py-2 xl:py-3  px-3.5  xl:px-4  2xl:px-6  flex items-center  text-xs leading-5 uppercase transition-colors border  border-light-1/50  hover:text-light-1 ${styles}`;
  const classSpan = `inline-block `;

  if (href) {
    return (
      <a href={href} className={classBtn}>
        <span className={classSpan}>{children}</span>
      </a>
    );
  }

  return (
    <button className={classBtn} onClick={onClick}>
      <span className={classSpan}> {children}</span>
    </button>
  );
};

export default Button;

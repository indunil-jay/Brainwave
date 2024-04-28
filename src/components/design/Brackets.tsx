const LeftBracket = () => {
  return (
    <span className=" bg-clip-text text-transparent bg-gradient-to-bl from-cyan-500  to-yellow-500">{`[`}</span>
  );
};
const RigtBracket = () => {
  return (
    <span className=" bg-clip-text text-transparent bg-gradient-to-br from-indigo-500  to-pink-500">
      {" "}
      {`]`}
    </span>
  );
};

type Props = {
  children: React.ReactNode;
};
const Brackets = ({ children }: Props) => {
  return (
    <div>
      <LeftBracket />
      <span className="font-grotesk tracking-tagline text-sm uppercase  text-light-1/50">
        {" "}
        {children}
      </span>

      <RigtBracket />
    </div>
  );
};

export default Brackets;

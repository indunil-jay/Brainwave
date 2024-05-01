type TableRowProps = {
  children: React.ReactNode;
};

const PriceTableRow = ({ children }: TableRowProps) => {
  return (
    <div
      className="relative grid grid-cols-[minmax(20rem,1fr)_12rem_12rem_12rem] w-full gap-2 justify-items-center  border-b border-b-light-1/10"
      role="row"
    >
      {children}
    </div>
  );
};
export default PriceTableRow;

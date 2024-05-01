const PricingTableColumnsHeads = () => {
  return (
    <>
      <div
        role="columnheader"
        className="py-1 w-full h-[4.6rem] flex items-center"
      >
        <span className="font-semibold text-[18px] leading-[2rem] text-light-1">
          {" "}
          Features
        </span>
      </div>
      <div
        role="columnheader"
        className="py-1 w-full h-[4.6rem] flex items-center"
      >
        <span className="font-semibold text-[18px] leading-[2rem] text-primary-2">
          {" "}
          Basic
        </span>
      </div>
      <div
        role="columnheader"
        className="py-1 w-full h-[4.6rem] flex items-center"
      >
        <span className="font-semibold text-[18px] leading-[2rem] text-primary-1">
          {" "}
          Premium
        </span>
      </div>
      <div
        role="columnheader"
        className="py-1 w-full h-[4.6rem] flex items-center"
      >
        <span className="font-semibold text-[18px] leading-[2rem] text-primary-3">
          {" "}
          EnterPrice
        </span>
      </div>
    </>
  );
};

export default PricingTableColumnsHeads;

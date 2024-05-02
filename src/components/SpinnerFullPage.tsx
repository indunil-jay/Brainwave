const SpinnerFullPage = () => {
  return (
    <div className="w-screen h-screen grid place-content-center">
      <div
        className="inline-block h-[6rem] w-[6rem] animate-spin rounded-full border-4 border-solid border-primary-1 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default SpinnerFullPage;

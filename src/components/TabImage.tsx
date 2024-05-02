const TabImage = ({ image, styles }: { image: string; styles?: string }) => {
  return (
    <div
      className={`relative  rounded-3xl max-w-[28rem] xl:w-[30.5rem] h-[30.5rem] xl:h-[35.625rem] ${styles}`}
    >
      <div className="w-full border border-light-1/10 z-40 h-full rounded-3xl bg-gradient-to-br from-dark-4 to-dark-2 absolute inset-0 flex items-center justify-center">
        <img src={image} alt="tab-image-1" />
      </div>
      <div className="absolute top-0 z-20 left-[6px] lg:left-5 w-full h-full bg-dark-4 rounded-[3.5rem] "></div>
      <div className="absolute top-0 z-10 left-[14px] lg:left-10 w-full h-full bg-dark-2/90  rounded-[5.5rem] "></div>
    </div>
  );
};

export default TabImage;

type FeatureTestimonialCardProps = {
  card: {
    id: number;
    description: string;
    userImg: string;
    username: string;
    occupation: string;
  };
};

const FeatureTestimonialCard = ({ card }: FeatureTestimonialCardProps) => {
  return (
    <>
      <div className="">
        <p className="font-code  mb-6 md:mb-12 lg:mb-0 text-[1.75rem] lg:leading-[2.25rem]">
          {card.description}
        </p>
      </div>

      <div className="flex gap-6  lg:justify-center lg:flex-col items-center  lg:gap-0 ">
        <div className="w-[7rem] h-[7rem]   lg:w-[10rem] lg:h-[10rem] rounded-3xl overflow-hidden">
          <img
            src={card.userImg}
            alt="user-image"
            className="w-full h-full object-cover
                     "
          />
        </div>
        <div className="mt-10">
          <h4 className="text-[1.25rem] font-semibold">{card.username}</h4>
          <p className="p3 mt-2">{card.occupation} </p>
        </div>
      </div>
    </>
  );
};

export default FeatureTestimonialCard;

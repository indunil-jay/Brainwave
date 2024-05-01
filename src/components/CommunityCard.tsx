type CommunityCardProps = {
  card: {
    id: number;
    description: string;
    userImg: string;
    username: string;
    occupation: string;
  };
};

const CommunityCard = ({ card }: CommunityCardProps) => {
  return (
    <div className="">
      <div className="bg-dark-1 border border-light-1/10  p-8 rounded-t-3xl">
        <p className="font-code text-base">{card.description}</p>
      </div>
      <div className="flex h-[6rem] justify-between items-center bg-dark-2 border border-light-1/10  p-8 rounded-b-3xl">
        <div>
          <h5 className="h5">{card.username}</h5>
          <span className="text-light-4 text-sm"> {card.occupation}</span>
        </div>
        <div className="w-[4rem] h-[4rem] aspect-square rounded-full overflow-hidden">
          <img
            src={card.userImg}
            className="w-full h-full object-cover"
            alt={`user-image-${card.username}`}
          />
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;

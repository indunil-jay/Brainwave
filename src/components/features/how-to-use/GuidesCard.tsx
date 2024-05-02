import Brackets from "../../design/Brackets";

type GuidesDataProps = {
  guide: {
    id: number;
    title: string;
    text1: string;
    text2?: string;
    image: string;
    url: string;
  };
};

const GuidesCard = ({ guide }: GuidesDataProps) => {
  return (
    <div className="pt-[6rem]" id={guide.url}>
      <div className="flex justify-between items-center">
        <h3 className="h3 py-1 mb-10">{guide.title}</h3>
        <Brackets>{`${guide.id > 9 ? guide.id : `0${guide.id}`}`}</Brackets>
      </div>
      <div className="rounded-3xl overflow-hidden pointer-events-none">
        <img
          src={guide.image}
          className="rounded-3xl "
          alt={`bg-image-${guide.title}`}
        />
      </div>
      <div className="flex flex-col gap-3 py-8">
        <p className="p2 text-base leading-6 text-light-2">{guide.text1}</p>

        {guide.text2 && (
          <p className="p2 text-base leading-6 text-light-2">{guide.text2}</p>
        )}
      </div>
    </div>
  );
};

export default GuidesCard;

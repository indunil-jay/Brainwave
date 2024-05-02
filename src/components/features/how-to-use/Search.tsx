import { searchMd } from "../../../assets";

const Search = () => {
  return (
    <div className=" h-[3.4rem] lg:h-[4.2rem] mt-[7rem] lg:mt-0 flex items-center relative rounded-3xl bg-transparent">
      <img
        src={searchMd}
        width={30}
        height={30}
        className="z-30 text-dark-3 ml-6 opacity-50 bg-transparent"
        alt="search-maginfier-icon"
      />
      <input
        type="text"
        placeholder="Search topic"
        className="absolute w-full h-full rounded-3xl bg-transparent border border-light-4 outline-0    px-20  ring-1 ring-inset ring-primary-1/20 placeholder:text-light-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-1/50   "
      />
    </div>
  );
};

export default Search;

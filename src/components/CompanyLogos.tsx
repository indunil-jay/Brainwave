import { companyLogos } from "../constants/data";

type Props = {
  styles?: string;
};
const CompanyLogos = ({ styles }: Props) => {
  return (
    <div className={styles}>
      <h5 className="font-grotesk font-light text-xs tracking-tagline  uppercase mb-6 text-center text-light-1/50">
        Helping People create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          return (
            <li
              className="flex items-center justify-center flex-1 h-[8.5rem] "
              key={index}
            >
              <img src={logo} width={134} height={28} alt={logo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompanyLogos;
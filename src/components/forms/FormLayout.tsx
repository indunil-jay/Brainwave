import { brainwaveSymbol } from "../../assets";
import EmailInput from "./EmailInput";
import FormButton from "./FormButton";
import PasswordInput from "./PasswordInput";

type Props = {
  formTitle: string;
  type?: "LOGIN" | "REGISTER";
};

const FormLayout = ({ formTitle, type }: Props) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          width={50}
          height={50}
          className="mx-auto "
          src={brainwaveSymbol}
          alt="company-logo"
        />

        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-light-1/90 ">
          {formTitle}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form className="space-y-6" action="#" method="POST">
          <EmailInput label="Email address" />

          <PasswordInput label="Password" withForgotField={true} />

          <FormButton label="Sign in" />
        </form>
        {type === "LOGIN" && (
          <p className="mt-10 text-center text-xs md:text-sm text-light-3">
            Not a member? {`  `}
            <a
              href="#"
              className="font-semibold leading-6 text-primary-1/90 transition-colors hover:text-primary-1"
            >
              Register &rarr;
            </a>
          </p>
        )}
        {type === "REGISTER" && (
          <p className="mt-10 text-center text-xs md:text-sm text-light-3">
            Already have an account? {`  `}
            <a
              href="#"
              className="font-semibold leading-6 text-primary-1/90 transition-colors hover:text-primary-1"
            >
              Login &rarr;
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default FormLayout;

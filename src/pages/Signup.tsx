import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import EmailInput from "../components/forms/EmailInput";
import FormButton from "../components/forms/FormButton";
import FormLayout from "../components/forms/FormLayout";
import PasswordInput from "../components/forms/PasswordInput";

const Signup = () => {
  return (
    <>
      <Header />
      <HeroLayout>
        <FormLayout formTitle="Create new account" type="REGISTER">
          <EmailInput label="Email address" id="email" />

          <PasswordInput
            label="Password"
            id="password"
            withForgotField={true}
          />
          <PasswordInput
            label="Confirm Password"
            id="confirmpassword"
            withForgotField={false}
          />

          <FormButton label="Sign up" />
        </FormLayout>
      </HeroLayout>
    </>
  );
};

export default Signup;

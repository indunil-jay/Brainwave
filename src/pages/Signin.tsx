import Header from "../components/Header";
import HeroLayout from "../components/HeroLayout";
import EmailInput from "../components/forms/EmailInput";
import FormButton from "../components/forms/FormButton";
import FormLayout from "../components/forms/FormLayout";
import PasswordInput from "../components/forms/PasswordInput";

const Signin = () => {
  return (
    <>
      <Header />
      <HeroLayout>
        <FormLayout formTitle="Sign in to your account" type="LOGIN">
          <EmailInput label="Email address" id="email" />

          <PasswordInput
            label="Password"
            withForgotField={true}
            id="password"
          />

          <FormButton label="Sign in" />
        </FormLayout>
      </HeroLayout>
    </>
  );
};

export default Signin;

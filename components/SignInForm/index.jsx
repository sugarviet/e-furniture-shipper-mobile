import { View } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";
import useAuth from "../../hooks/useAuth";

function SignInForm() {
  const { control, handleSubmit } = useForm();
  const { signIn } = useAuth();

  const onSubmit = (data) => {
    signIn(data);
  };

  return (
    <View>
      <View>
        <FormInput type="username" control={control} />
        <FormInput type="password" control={control} />
      </View>

      <LinkableButton className="mt-4" handlePress={handleSubmit(onSubmit)}>
        Sign in
      </LinkableButton>
    </View>
  );
}

export default SignInForm;

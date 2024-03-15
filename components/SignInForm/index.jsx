import { View } from "react-native";
import { useForm } from "react-hook-form";
import LinkableButton from "../LinkableButton";
import FormInput from "../FormInput";

function SignInForm() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { username, password } = data;
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

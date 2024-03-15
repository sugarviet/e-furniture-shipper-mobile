import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { classNames } from "../../utils/classNames";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import ErrorMessage from "../ErrorMessage";

const TYPE = {
  username: {
    placeholder: "username",
    icon: IMAGES.user,
    rules: () => ({
      required: "Please enter the username",
      pattern: {
        value: /^\S*$/,
        message: "Username must be no whitespace",
      },
    }),
  },
  password: {
    placeholder: "password",
    icon: IMAGES.padlock,
    isSecure: true,
    rules: () => ({
      required: "Please enter the password",
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?!\s).{6,}$/,
        message:
          "The password must be at least 6 characters long, including both uppercase and lowercase letters, and numbers, no whitespace",
      },
    }),
  },
};

function FormInput({ type, control }) {
  return (
    <Controller
      control={control}
      name={type}
      defaultValue={""}
      rules={TYPE[type].rules()}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <View>
          <View
            className={classNames(
              "p-2 h-12 bg-gray-100 rounded-md my-2 border-[1px] flex-row items-center",
              error ? "border-rose-500" : "border-transparent"
            )}
          >
            <Icon className="w-6 h-6 mr-2" source={TYPE[type].icon} />
            <TextInput
              className="flex-1"
              placeholder={TYPE[type].placeholder}
              value={value}
              editable={TYPE[type].editable}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
          {error && <ErrorMessage message={error.message} />}
        </View>
      )}
    />
  );
}

export default FormInput;

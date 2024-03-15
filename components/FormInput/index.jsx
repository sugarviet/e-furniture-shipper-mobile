import { Text, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { classNames } from "../../utils/classNames";

const TYPE = {
  username: {
    placeholder: "username",
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
              "p-2 h-12 bg-gray-100 rounded-md my-2 border-[1px] justify-center",
              error ? "border-rose-500" : "border-transparent"
            )}
          >
            <TextInput
              placeholder={TYPE[type].placeholder}
              placeholderTextColor="#4B4B4B"
              value={value}
              editable={TYPE[type].editable}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
          {error && (
            <Text className="text-rose-500 text-xs">{error.message}</Text>
          )}
        </View>
      )}
    />
  );
}

export default FormInput;

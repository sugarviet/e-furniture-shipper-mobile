import { Text, TextInput, View } from "react-native";
import styles from "./style";
import { Ionicons } from "@expo/vector-icons";
import { Controller } from "react-hook-form";

const TYPE = {
  username: {
    placeholder: "Username",
    rules: () => ({
      required: "Please enter the username",
      pattern: {
        value: /^\S*$/,
        message: "Username must be no whitespace",
      },
    }),
  },
  password: {
    placeholder: "Password",
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
          <View style={[styles.inputContainer(error)]}>
            <TextInput
              style={styles.input}
              placeholder={TYPE[type].placeholder}
              placeholderTextColor="#4B4B4B"
              value={value}
              editable={TYPE[type].editable}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          </View>
          {error && <Text style={styles.errorMessage}>{error.message}</Text>}
        </View>
      )}
    />
  );
}

export default FormInput;

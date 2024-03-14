import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useAuth } from "../../stores/useAuth";
import { router } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import FormInput from "../../components/form-input";
import Model3D from "../../components/model-3d";
import CameraView from "../../components/camera-view";

const SignIn = () => {
  const { control, handleSubmit } = useForm();
  const { setToken } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    setToken("ok ku");
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
      
      <FormInput name="firstname" control={control} placeholder="First name" required errorMessage="Please enter full"/>
      <FormInput name="password" control={control} type="password" placeholder="Password"/>
      {/* <Controller
        name="lastname"
        control={control}
        render={({ field: {value, onChange, onBlur}, fieldState: {error} }) => <TextInput  style={styles.input} placeholder="Last Name" onChangeText={onChange} onBlur={onBlur} value={value}/>}
      /> */}
      
      <Button
        title="submit"
        styles={styles.button}
        onPress={handleSubmit(handleLogin)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    color: "white",
    marginTop: 40,
  },
  input: {
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "blue",
    color: "white",
  },
});

export default SignIn;

import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { useAuth } from "../../stores/useAuth";
import { router } from "expo-router";

const SignIn = () => {
 
  const { setToken } = useAuth();

  const handleLogin = (data) => {
    console.log(data);
    setToken("ok ku");
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text>Sign in</Text>
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

import { SafeAreaView, Text, View } from "react-native";
import SignInForm from "../../components/SignInForm";
import AnimationView from "../../components/AnimationView";
import { ANIMATIONS } from "../../constants/animations";

const SignIn = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="items-center">
        <AnimationView width={320} height={320} source={ANIMATIONS.delivery} />
      </SafeAreaView>
      <View className="bg-white flex-1 rounded-l-[50em] rounded-r-[50em] px-4 py-12">
        <SignInForm />
      </View>
    </View>
  );
};

export default SignIn;

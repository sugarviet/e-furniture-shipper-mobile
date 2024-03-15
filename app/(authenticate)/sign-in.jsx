import { SafeAreaView, Text, View } from "react-native";
import SignInForm from "../../components/SignInForm";
import AnimationView from "../../components/AnimationView";
import { ANIMATIONS } from "../../constants/animations";

const SignIn = () => {
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="items-center">
        <AnimationView className="w-72 h-72" source={ANIMATIONS.delivery} />
      </SafeAreaView>
      <View className="bg-white flex-1 rounded-l-[50em] rounded-r-[50em] px-4 py-12">
        <Text className="text-3xl font-bold mb-4 text-gray-700">
          Sign in to continue your delivery jobs
        </Text>
        <SignInForm />
      </View>
    </View>
  );
};

export default SignIn;

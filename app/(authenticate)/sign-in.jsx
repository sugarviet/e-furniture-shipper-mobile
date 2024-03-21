import { KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import SignInForm from "../../components/SignInForm";
import AnimationView from "../../components/AnimationView";
import { ANIMATIONS } from "../../constants/animations";
import Logo from "../../components/Logo";

const SignIn = () => {
  return (
    <View className="flex-1 bg-teal-800">
      <SafeAreaView className="items-center">
        <View className="mt-8">
          <Logo />
        </View>
        <AnimationView className="w-72 h-72" source={ANIMATIONS.delivery} />
      </SafeAreaView>
      <View className="bg-white flex-1 rounded-tl-3xl rounded-tr-3xl px-4 py-8">
        <Text className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Let's Get Started!
        </Text>
        <SignInForm />
        <Text className="text-xs text-center mt-4 text-gray-500">
          Sign in to continue your delivery jobs
        </Text>
      </View>
    </View>
  );
};

export default SignIn;

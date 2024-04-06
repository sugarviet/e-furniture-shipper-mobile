import { Text, View } from "react-native";
import { classNames } from "../../utils/classNames";
import AnimationView from "../AnimationView";
import { ANIMATIONS } from "../../constants/animations";

function WaitingConfirmContainer({ className }) {
  return (
    <View className={classNames(className)}>
      <View className="items-center justify-center">
        <Text className="text-emerald-50 font-bold tracking-widest text-2xl text-center">
          Waiting for confirmation...
        </Text>
        <Text className="text-white tracking-widest text-xs text-center">
          Let's start your trip by picking up package
        </Text>
        <View className="bg-white mt-16 h-40 items-center justify-center">
          <AnimationView className="w-96 h-96" source={ANIMATIONS.code_bar} />
        </View>
      </View>
    </View>
  );
}

export default WaitingConfirmContainer;

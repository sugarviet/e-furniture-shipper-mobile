import { SafeAreaView, ScrollView, Text, View } from "react-native";
import PickUpPackage from "../PickUpPackage";
import AnimationView from "../AnimationView";
import { ANIMATIONS } from "../../constants/animations";
import { classNames } from "../../utils/classNames";

function PickUpPackageContainer({ className }) {
  return (
    <View className={classNames(className)}>
      <View className="items-center">
        <Text className="text-emerald-50 font-bold tracking-widest text-2xl text-center">
          You are free now...
        </Text>
        <Text className="text-white tracking-widest text-xs text-center">
          Let's start your trip by picking up package
        </Text>
        <AnimationView
          className="w-96 h-96"
          source={ANIMATIONS.location_direction}
        />
      </View>
    </View>
  );
}

export default PickUpPackageContainer;

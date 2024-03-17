import { Text, TouchableOpacity, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

function PickUpPackage() {
  return (
    <TouchableOpacity className="bg-rose-400 rounded-lg px-4 h-12 flex-row items-center justify-between">
      <View className="flex-row items-center ">
        <Icon className="w-8 h-8 mr-2" source={IMAGES.open_package} />
        <Text className="font-bold text-white uppercase">Pick up package</Text>
      </View>
      <Icon tintColor="white" className="w-4 h-4" source={IMAGES.right_arrow} />
    </TouchableOpacity>
  );
}

export default PickUpPackage;

import { View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import useNavigation from "../../hooks/useNavigation";
import Map from "../../components/Map";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  return (
    <View className="flex-1">
      <View className="absolute top-16 left-4 z-50">
        <HeaderButton
          onPress={go_back}
          className="w-4 h-4"
          source={IMAGES.back_arrow}
        />
      </View>
      <Map />
    </View>
  );
}

export default DeliveryScreen;

import { SafeAreaView, Text, View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import useNavigation from "../../hooks/useNavigation";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  return (
    <View className="flex-1">
      <View className="absolute top-16 left-4">
        <HeaderButton
          onPress={go_back}
          className="w-4 h-4"
          source={IMAGES.back_arrow}
        />
      </View>
      <Text>Delivery Screen</Text>
    </View>
  );
}

export default DeliveryScreen;

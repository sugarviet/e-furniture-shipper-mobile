import { View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_pending_orders_api } from "../../api/orderApi";
import { useLocalSearchParams } from "expo-router";

function DeliveryScreen() {
  const { go_back } = useNavigation();

  const { data } = useLocalSearchParams();

  const orderShippings = JSON.parse(data);

  const destinations = orderShippings.map((orderShipping) => {
    const { address, district, ward } = orderShipping;
    return `${address} ${ward} ${district}`;
  });

  return (
    <View className="flex-1">
      <View className="absolute top-16 left-4 z-50">
        <HeaderButton
          onPress={go_back}
          className="w-4 h-4"
          source={IMAGES.back_arrow}
        />
      </View>
      <Map destinations={destinations} />
    </View>
  );
}

export default DeliveryScreen;

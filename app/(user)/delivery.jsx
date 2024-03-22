import { View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_pending_orders_api } from "../../api/orderApi";

function DeliveryScreen() {
  const { go_back } = useNavigation();

  const { data, isLoading } = useFetchAuth(get_pending_orders_api());

  if (isLoading) return null;

  const deliveryOrders = data.data.slice(0, 4);

  const orderShippings = deliveryOrders.map((order) => order.order_shipping);

  const destinations = orderShippings.map((orderShipping) => {
    const { address, district, ward, province } = orderShipping;
    return `${address} ${ward} ${district}  ${province}`;
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

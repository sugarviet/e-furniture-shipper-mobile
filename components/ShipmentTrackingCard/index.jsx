import { Text, TouchableOpacity, View } from "react-native";
import ShipmentStep from "../ShipmentStep";
import ShipmentBriefInfo from "../ShipmentBriefInfo";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import useNavigation from "../../hooks/useNavigation";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_pending_orders_api } from "../../api/orderApi";

function ShipmentTrackingCard() {
  const { go_to_delivery } = useNavigation();
  const { data, isLoading } = useFetchAuth(get_pending_orders_api());

  if (isLoading) return null;

  const deliveryOrders = data.data.slice(0, 4);

  const total = deliveryOrders.reduce(
    (total, cur) => total + cur.order_checkout.final_total,
    0
  );

  const orderShippings = deliveryOrders.map((order) => order.order_shipping);

  return (
    <View className="my-2">
      <Text className="font-bold text-lg tracking-wider mb-2">
        Current delivery trip
      </Text>
      <TouchableOpacity
        onPress={go_to_delivery}
        className="rounded-xl shadow-lg py-2 shadow-slate-300 bg-white"
      >
        <View className="flex-row justify-between items-center px-4">
          <ShipmentBriefInfo total={total} />
          <Icon className="w-4 h-4" source={IMAGES.right_arrow} />
        </View>
        <ShipmentStep orderShippings={orderShippings} />
      </TouchableOpacity>
    </View>
  );
}

export default ShipmentTrackingCard;

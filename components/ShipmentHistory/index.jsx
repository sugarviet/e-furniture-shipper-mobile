import { Text, View } from "react-native";
import ShipmentCard from "../ShipmentCard";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_orders_api } from "../../api/orderApi";

function ShipmentHistory() {
  const { data, isLoading } = useFetchAuth(get_orders_api("pending"));

  if (isLoading) return null;

  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center  mb-2">
        <Text className="text-lg font-bold tracking-wider">
          Recent shipment
        </Text>
        <Text className="text-gray-500 text-xs">{`(${data.data.length})`}</Text>
      </View>
      {data.data.map((order, i) => (
        <ShipmentCard key={i} order={order} status="pending" />
      ))}
    </View>
  );
}

export default ShipmentHistory;

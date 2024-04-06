import { Text, View } from "react-native";
import ShipmentCard from "../ShipmentCard";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_orders_api } from "../../api/orderApi";

function ShipmentHistory() {
  const { data, isLoading } = useFetchAuth(get_orders_api("processing"));

  if (isLoading) return null;

  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-lg text-teal-700 font-bold tracking-wider">
          Recent shipment
        </Text>
        <Text className="text-gray-500 text-xs">{`(${data.data.length})`}</Text>
      </View>
      {data.data.map((order, i) => (
        <ShipmentCard
          className="border-b border-gray-200 my-1"
          key={i}
          order={order}
          status="processing"
        />
      ))}
    </View>
  );
}

export default ShipmentHistory;

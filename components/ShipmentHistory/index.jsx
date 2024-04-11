import { Text, View } from "react-native";
import ShipmentCard from "../ShipmentCard";

function ShipmentHistory({ data }) {
  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-lg text-teal-700 font-bold tracking-wider">
          Recent shipment
        </Text>
        <Text className="text-gray-500 text-xs">{`(${data.length})`}</Text>
      </View>
      {data.map((item, i) => {
        const { order } = item;
        const { order_tracking } = order;
        const current_state = order_tracking[order_tracking.length - 1];
        return (
          <ShipmentCard
            className="border-b border-gray-200 my-1"
            key={i}
            order={order}
            status={current_state.name}
          />
        );
      })}
    </View>
  );
}

export default ShipmentHistory;

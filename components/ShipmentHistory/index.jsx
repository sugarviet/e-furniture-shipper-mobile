import { Text, View } from "react-native";
import ShipmentCard from "../ShipmentCard";

function ShipmentHistory() {
  return (
    <View className="my-2">
      <Text className="text-lg font-bold tracking-wider mb-2">
        Order is being delivered
      </Text>
      <ShipmentCard />
    </View>
  );
}

export default ShipmentHistory;

import { ScrollView, View } from "react-native";
import ShipmentTrackingCard from "../ShipmentTrackingCard";
import ShipmentHistory from "../ShipmentHistory";
import { classNames } from "../../utils/classNames";

function ShipmentContainer({ className }) {
  return (
    <ScrollView className={classNames(className)}>
      <ShipmentTrackingCard />
      <View className="pb-12">
        <ShipmentHistory />
      </View>
    </ScrollView>
  );
}

export default ShipmentContainer;

import { Text, TouchableOpacity, View } from "react-native";
import ShipmentStep from "../ShipmentStep";
import ShipmentBriefInfo from "../ShipmentBriefInfo";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import useNavigation from "../../hooks/useNavigation";

function ShipmentTrackingCard({ data, currentShipment, total }) {
  const { go_to_delivery } = useNavigation();

  return (
    <View className="my-2 p-2">
      <Text className="font-bold text-teal-700 text-lg tracking-wider mb-2">
        Current delivery trip
      </Text>
      <TouchableOpacity
        onPress={go_to_delivery}
        className="rounded-xl shadow-lg py-2 shadow-slate-300 bg-white"
      >
        <View className="flex-row justify-between items-center px-2">
          <ShipmentBriefInfo total={total} />
          <Icon className="w-4 h-4" source={IMAGES.right_arrow} />
        </View>
        <ShipmentStep currentShipment={currentShipment} data={data} />
      </TouchableOpacity>
    </View>
  );
}

export default ShipmentTrackingCard;

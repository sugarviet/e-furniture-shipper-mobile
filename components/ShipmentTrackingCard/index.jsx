import { TouchableOpacity, View } from "react-native";
import ShipmentStep from "../ShipmentStep";
import ShipmentBriefInfo from "../ShipmentBriefInfo";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import useNavigation from "../../hooks/useNavigation";

function ShipmentTrackingCard() {
  const { go_to_delivery } = useNavigation();
  return (
    <TouchableOpacity
      onPress={go_to_delivery}
      className="rounded-xl shadow-lg py-2 shadow-slate-300 bg-white"
    >
      <View className="flex-row justify-between items-center px-4">
        <ShipmentBriefInfo />
        <Icon className="w-4 h-4" source={IMAGES.right_arrow} />
      </View>
      <ShipmentStep />
    </TouchableOpacity>
  );
}

export default ShipmentTrackingCard;

import { View, Text } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { formatCurrency } from "../../utils/formatCurrency";

function ShipmentBriefInfo({ total, code }) {
  return (
    <View className="flex-row items-center">
      <Icon className="w-10 h-10 mr-2" source={IMAGES.truck_3d} />
      <View className="justify-center">
        <Text className="text-xs tracking-tighter font-semibold">
          Total amount:
        </Text>
        <Text className="text-xs text-teal-600 font-bold">
          {formatCurrency(total)}
        </Text>
      </View>
    </View>
  );
}

export default ShipmentBriefInfo;

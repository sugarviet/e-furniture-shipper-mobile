import { Text, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import dayjs from "dayjs";
import StatusTracking from "../StatusTracking";

function ShipmentCard() {
  return (
    <View className="flex-row items-center bg-teal-50 rounded-xl px-4 py-2 shadow-md shadow-gray-800">
      <View className="flex-1">
        <StatusTracking status="delivery" />
        <Text className="font-bold tracking-tighter">#CODE2706</Text>
        <Text className="text-xs text-gray-500">Sofa x 1, Chair x 2</Text>
        <Text className="text-xs text-gray-500">Sofa x 2</Text>
        <Text className="text-xs text-gray-500">Bed x 1</Text>
        <View className="flex-row mt-2">
          <Text className="text-teal-600 font-bold">
            {formatCurrency(10000000)}
          </Text>
          <Text className="mx-1">-</Text>
          <Text className="text-xs">{formatDate(dayjs().toISOString())}</Text>
        </View>
      </View>
      <View className="items-center justify-center">
        <Icon className="w-16 h-16" source={IMAGES.goods} />
      </View>
    </View>
  );
}

export default ShipmentCard;

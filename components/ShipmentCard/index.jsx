import { Text, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import dayjs from "dayjs";
import StatusTracking from "../StatusTracking";

const STATUS_PROPS = {
  delivery: {
    icon: IMAGES.goods,
  },
  fail: {
    icon: IMAGES.goods_return_3d,
  },
  success: {
    icon: IMAGES.goods_delivered,
  },
};

function ShipmentCard({ status }) {
  const { icon } = STATUS_PROPS[status];
  return (
    <View className="flex-row items-center my-2 bg-white rounded-xl px-4 py-2 shadow-lg shadow-slate-300">
      <View className="flex-1">
        <StatusTracking status={status} />
        <Text className="font-bold tracking-tighter">#CODE2706</Text>
        <Text className="text-xs text-gray-500">Sofa x 1, Chair x 2</Text>
        <Text className="text-xs text-gray-500">
          Address 1, District 1, HCM City
        </Text>
        <View className="flex-row mt-2">
          <Text className="text-teal-600 font-bold">
            {formatCurrency(10000000)}
          </Text>
          <Text className="mx-1">-</Text>
          <Text className="text-xs">{formatDate(dayjs().toISOString())}</Text>
        </View>
      </View>
      <View className="items-center justify-center">
        <Icon className="w-16 h-16" source={icon} />
      </View>
    </View>
  );
}

export default ShipmentCard;

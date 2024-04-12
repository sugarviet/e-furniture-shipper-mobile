import { Text, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import StatusTracking from "../StatusTracking";
import { classNames } from "../../utils/classNames";

const STATUS_PROPS = {
  shipping: {
    icon: IMAGES.goods,
  },
  processing: {
    icon: IMAGES.pending_order,
  },
  failed: {
    icon: IMAGES.goods_return_3d,
  },
  done: {
    icon: IMAGES.goods_delivered,
  },
};

function ShipmentCard({ status, order, className, products }) {
  const toLowerCaseStatus = status.toLowerCase();
  const { icon } = STATUS_PROPS[toLowerCaseStatus];

  const { order_code, order_shipping, order_checkout, createdAt } = order;

  const { address, district, ward } = order_shipping;

  return (
    <View
      className={classNames(
        "flex-row items-center bg-white px-4 py-2 shadow-lg shadow-slate-300",
        className
      )}
    >
      <View className="flex-1">
        <StatusTracking status={toLowerCaseStatus} />
        <Text className="font-bold tracking-tighter">#{order_code}</Text>
        <Text className="text-xs text-gray-500">{products}</Text>
        <Text className="text-xs text-gray-500">
          {`${address} ${district} ${ward} Thành phố Hồ Chí Minh`}
        </Text>
        <View className="flex-row mt-2">
          <Text className="text-teal-600 font-bold">
            {formatCurrency(order_checkout.final_total)}
          </Text>
          <Text className="mx-1">-</Text>
          <Text className="text-xs">{formatDate(createdAt)}</Text>
        </View>
      </View>
      <View className="items-center justify-center">
        <Icon className="w-16 h-16" source={icon} />
      </View>
    </View>
  );
}

export default ShipmentCard;

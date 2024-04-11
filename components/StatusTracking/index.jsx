import { Text, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { classNames } from "../../utils/classNames";

const STATUS_PROPS = {
  shipping: {
    className: "bg-orange-500",
    label: "in-delivery",
    icon: IMAGES.delivery_truck,
  },
  processing: {
    className: "bg-blue-500",
    label: "pending",
    icon: IMAGES.time,
  },
  success: {
    className: "bg-green-500",
    label: "success",
    icon: IMAGES.checked,
  },
  fail: {
    className: "bg-rose-500",
    label: "fail",
    icon: IMAGES.goods_return,
  },
};

function StatusTracking({ status }) {
  const { className, label, icon } = STATUS_PROPS[status];
  return (
    <Text className="my-1">
      <View
        className={classNames(
          "p-1 rounded-md items-center justify-center flex-row",
          className
        )}
      >
        <Icon className="w-3 h-3 mr-1" source={icon} tintColor="#fff" />
        <Text className="text-white font-semibold text-[10px]">{label}</Text>
      </View>
    </Text>
  );
}

export default StatusTracking;

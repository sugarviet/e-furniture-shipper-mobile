import { Text, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { classNames } from "../../utils/classNames";

const STATUS_PROPS = {
  delivery: {
    className: "bg-orange-500",
    label: "in-delivery",
  },
  success: {
    className: "bg-green-500",
    label: "success",
  },
};

function StatusTracking({ status }) {
  const { className, label } = STATUS_PROPS[status];
  return (
    <Text className="my-1">
      <View
        className={classNames(
          "p-1 rounded-md items-center justify-center flex-row",
          className
        )}
      >
        <Icon
          className="w-3 h-3 mr-1"
          source={IMAGES.delivery_truck}
          tintColor="#fff"
        />
        <Text className="text-white font-semibold text-[10px]">{label}</Text>
      </View>
    </Text>
  );
}

export default StatusTracking;

import { Text, View } from "react-native";
import { classNames } from "../../utils/classNames";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import convertMinsToHrMins from "../../utils/convertMinsToHrMins";

function MapHeader({ className, destination, duration, distance }) {
  return (
    <View className={classNames(className, "items-center justify-center px-8")}>
      <View className="flex-row items-center bg-white rounded-lg px-4 py-2 shadow-lg">
        <Icon className="w-6 h-6 mr-2" source={IMAGES.home_marker} />
        <View className="flex-1 overflow-hidden">
          <Text numberOfLines={1} className="text-gray-500 text-xs">
            {destination}
          </Text>
        </View>
        <View>
          <Text className="text-xs ml-2 text-right">
            {Math.ceil(distance)} km
          </Text>
          <Text className="text-xs ml-2 text-right">
            {convertMinsToHrMins(Math.ceil(duration))}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default MapHeader;

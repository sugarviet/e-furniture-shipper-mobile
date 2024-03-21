import { View, Text } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { useAuthStore } from "../../stores/useAuthStore";

function UserBriefInfo() {
  const { username } = useAuthStore();
  return (
    <View className="flex-row items-center">
      <View className="bg-white rounded-full p-1 mr-2">
        <Icon className="w-6 h-6" source={IMAGES.delivery_man} />
      </View>
      <Text className="text-sm font-semibold text-white">{username}</Text>
    </View>
  );
}

export default UserBriefInfo;

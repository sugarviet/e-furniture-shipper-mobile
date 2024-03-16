import { TouchableOpacity, View } from "react-native";

function TabBarCustomButton({ accessibilityState, children, onPress }) {
  const selected = accessibilityState.selected;

  return selected ? (
    <View className="flex-1 items-center">
      <View className="flex-row absolute top-0">
        <View className="flex-1 bg-white"></View>
        <View className="flex-1 bg-white"></View>
      </View>
      <TouchableOpacity className="-top-6 items-center justify-center w-12 h-12 rounded-full bg-white">
        {children}
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      className="flex-1 h-12 bg-white"
      activeOpacity={1}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

export default TabBarCustomButton;

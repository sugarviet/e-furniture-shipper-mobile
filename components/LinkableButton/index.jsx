import { TouchableOpacity, Text } from "react-native";

function LinkableButton({ children, handlePress }) {
  return (
    <TouchableOpacity
      className="mt-4 bg-black justify-center items-center py-3 rounded-xl"
      onPress={handlePress}
    >
      <Text className="text-white uppercase font-semibold">{children}</Text>
    </TouchableOpacity>
  );
}

export default LinkableButton;

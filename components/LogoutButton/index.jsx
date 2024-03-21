import { Text, TouchableOpacity } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import useAuth from "../../hooks/useAuth";

function LogoutButton() {
  const { signOut } = useAuth();

  return (
    <TouchableOpacity
      onPress={signOut}
      className="bg-white px-2 shadow-lg flex-row h-8 rounded-lg items-center"
    >
      <Icon className="w-6 h-6" source={IMAGES.logout} />
      <Text className="font-semibold text-xs">Sign out</Text>
    </TouchableOpacity>
  );
}

export default LogoutButton;

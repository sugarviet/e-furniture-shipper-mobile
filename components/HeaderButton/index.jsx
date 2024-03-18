import { TouchableOpacity } from "react-native";
import Icon from "../Icon";

function HeaderButton({ className, source, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="bg-emerald-600 p-2 rounded-md"
    >
      <Icon tintColor="white" className={className} source={source} />
    </TouchableOpacity>
  );
}

export default HeaderButton;

import { TouchableOpacity } from "react-native";
import Icon from "../Icon";

function IconButton({ source, className, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon className={className} source={source} />
    </TouchableOpacity>
  );
}

export default IconButton;

import { View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

function Logo() {
  return <Icon className="h-16 w-96" source={IMAGES.logo} />;
}

export default Logo;

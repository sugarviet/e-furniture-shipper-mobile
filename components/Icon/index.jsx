import { Image } from "react-native";
import { classNames } from "../../utils/classNames";

function Icon({ source, className }) {
  return (
    <Image
      resizeMode="contain"
      className={classNames(className)}
      source={source}
    />
  );
}

export default Icon;

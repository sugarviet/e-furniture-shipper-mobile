import { Image } from "react-native";
import { classNames } from "../../utils/classNames";

function Icon({ source, className, tintColor }) {
  return (
    <Image
      resizeMode="contain"
      className={classNames(className)}
      source={source}
      tintColor={tintColor}
    />
  );
}

export default Icon;

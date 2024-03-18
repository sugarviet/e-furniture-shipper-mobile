import { Marker } from "react-native-maps";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

function DestinationMarker({ coordinate }) {
  return (
    <Marker coordinate={coordinate}>
      <Icon className="w-8 h-8" source={IMAGES.home_marker} />
    </Marker>
  );
}

export default DestinationMarker;

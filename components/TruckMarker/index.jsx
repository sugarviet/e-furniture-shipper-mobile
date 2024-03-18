import { Marker } from "react-native-maps";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

function TruckMarker({ coordinate, angle }) {
  return (
    <Marker
      anchor={{ x: 0.5, y: 0.5 }}
      flat={true}
      rotation={angle}
      coordinate={coordinate}
    >
      <Icon className="w-10 h-10" source={IMAGES.truck_3d} />
    </Marker>
  );
}

export default TruckMarker;

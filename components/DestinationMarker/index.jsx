import { Marker } from "react-native-maps";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { useFetch } from "../../hooks/api-hooks";
import { get_geo_code_api } from "../../api/vietMapApi";

function DestinationMarker({ address }) {
  const { data, isLoading } = useFetch(get_geo_code_api(address));

  if (isLoading || !data) return null;

  const { geometry } = data.data.features[0];
  const coordinate = {
    latitude: geometry.coordinates[1],
    longitude: geometry.coordinates[0],
  };

  return (
    <Marker coordinate={coordinate}>
      <Icon className="w-8 h-8" source={IMAGES.home_marker} />
    </Marker>
  );
}

export default DestinationMarker;

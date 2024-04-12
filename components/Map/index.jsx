import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import DestinationMarker from "../DestinationMarker";
import TruckMarker from "../TruckMarker";
import MapDirection from "../MapDirection";
import { useEffect, useState } from "react";
import useLocation from "../../hooks/useLocation";
import { useFetch } from "../../hooks/api-hooks";
import { get_geo_code_api } from "../../api/vietMapApi";

function Map({ destinations }) {
  const { coordinate: curLocation, isLoading: curLocationLoading } =
    useLocation();

  const { data, isLoading } = useFetch(get_geo_code_api(destinations[0]));

  const [angle, setAngle] = useState();

  if (isLoading || curLocationLoading || !curLocation) return null;

  const { geometry } = data.data.features[0];
  const toLocation = {
    latitude: geometry.coordinates[1],
    longitude: geometry.coordinates[0],
  };

  const region = {
    latitude: (toLocation.latitude + curLocation.latitude) / 2,
    longitude: (toLocation.longitude + curLocation.longitude) / 2,
    latitudeDelta: Math.abs(toLocation.latitude - curLocation.latitude) * 3,
    longitudeDelta: Math.abs(toLocation.longitude - curLocation.longitude) * 3,
  };

  return (
    <MapView
      // followsUserLocation
      // showsUserLocation
      style={{ flex: 1 }}
      initialRegion={region}
    >
      {/* <MapDirection
        onRotate={setAngle}
        origin={curLocation}
        destination={toLocation}
      /> */}
      {destinations.map((destination, i) => (
        <DestinationMarker key={i} address={destination} />
      ))}

      {!curLocationLoading && (
        <TruckMarker angle={angle} coordinate={curLocation} />
      )}
    </MapView>
  );
}

export default Map;

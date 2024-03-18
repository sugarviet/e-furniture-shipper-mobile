import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import DestinationMarker from "../DestinationMarker";
import TruckMarker from "../TruckMarker";
import MapDirection from "../MapDirection";
import { useState } from "react";

const NVH_COORDINATES = [10.875260759212852, 106.80068047903023];
const FPT_COORDINATES = [10.84131726157012, 106.80989372320863];

const toLocation = {
  latitude: NVH_COORDINATES[0],
  longitude: NVH_COORDINATES[1],
};

const formLocation = {
  latitude: FPT_COORDINATES[0],
  longitude: FPT_COORDINATES[1],
};

function Map() {
  const region = {
    latitude: (NVH_COORDINATES[0] + FPT_COORDINATES[0]) / 2,
    longitude: (NVH_COORDINATES[1] + FPT_COORDINATES[1]) / 2,
    latitudeDelta: Math.abs(NVH_COORDINATES[0] - FPT_COORDINATES[0]) * 2,
    longitudeDelta: Math.abs(NVH_COORDINATES[1] - FPT_COORDINATES[1]) * 2,
  };

  const [angle, setAngle] = useState();

  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{ flex: 1 }}
      initialRegion={region}
    >
      <MapDirection
        onRotate={setAngle}
        origin={formLocation}
        destination={toLocation}
      />
      <DestinationMarker coordinate={toLocation} />
      <TruckMarker angle={angle} coordinate={formLocation} />
    </MapView>
  );
}

export default Map;

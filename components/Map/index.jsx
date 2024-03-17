import { View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirection from "react-native-maps-directions";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { COLORS } from "../../constants/color";

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

  return (
    <MapView style={{ flex: 1 }} initialRegion={region}>
      <MapViewDirection
        strokeWidth={5}
        apikey="bb75fca607d1e44994bcbac52a0285fe8beaae07"
        strokeColor={COLORS.primary}
        optimizeWaypoints={true}
        origin={formLocation}
        destination={toLocation}
      />
      <Marker coordinate={toLocation}>
        <View className="h-8 w-8 rounded-full items-center justify-center bg-teal-600">
          <View className="w-4 h-4 rounded-full items-center justify-center bg-teal-600">
            <Icon className="w-4 h-4" source={IMAGES.checked} />
          </View>
        </View>
      </Marker>
      <Marker coordinate={formLocation}>
        <Icon className="w-10 h-10" source={IMAGES.truck_3d} />
      </Marker>
    </MapView>
  );
}

export default Map;

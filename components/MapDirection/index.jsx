import MapViewDirections from "react-native-maps-directions";
import { COLORS } from "../../constants/color";
import { useState } from "react";
import { GOOGLE_API_KEY } from "../../constants/key";

function MapDirection({ origin, destination, onRotate, onMove }) {
  const [isReady, setIsReady] = useState(false);
  const [curLocation, setCurLocation] = useState(origin);

  const calculateAngle = (coordinates) => {
    const startLat = coordinates[0]["latitude"];
    const startLng = coordinates[0]["longitude"];
    const endLat = coordinates[1]["latitude"];
    const endLng = coordinates[1]["longitude"];

    const dx = endLat - startLat;
    const dy = endLng - startLng;

    return (Math.atan2(dy, dx) * 180) / Math.PI - 135;
  };

  return (
    <MapViewDirections
      strokeWidth={4}
      apikey={GOOGLE_API_KEY}
      strokeColor={COLORS.primary}
      optimizeWaypoints={true}
      origin={curLocation}
      destination={destination}
      onReady={(result) => {
        if (isReady) return;

        const nextLocation = {
          latitude: result.coordinates[0]["latitude"],
          longitude: result.coordinates[0]["longitude"],
        };

        if (result.coordinates.length > 2) {
          const angle = calculateAngle(result.coordinates);
          onRotate(angle);
        }

        onMove(result);
        setCurLocation(nextLocation);
      }}
    />
  );
}

export default MapDirection;

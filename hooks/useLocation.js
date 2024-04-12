import * as Location from "expo-location";
import { useEffect, useState } from "react";

function useLocation() {
    const [coordinate, setCoordinates] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    async function startLocationTracking(onLocationUpdate) {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            return;
        }

        const locationOptions = {
            enableHighAccuracy: true,
            timeInterval: 5000,
            distanceInterval: 10,
        };

        const locationSubscription = await Location.watchPositionAsync(
            locationOptions,
            onLocationUpdate
        );

        return locationSubscription;
    }

    async function stopLocationTracking(locationSubscription) {
        if (locationSubscription) {
            await locationSubscription.remove();
        }
    }

    const updateCoordinate = (data) => {
        // const coordinates = await Location.getCurrentPositionAsync({}).then(location => location.coords);
        const { coords } = data;
        setCoordinates(coords);
    }

    useEffect(() => {
        const locationSubscription = async () => await startLocationTracking(updateCoordinate);

        (async () => {
            setIsLoading(true);
            await locationSubscription()
            setIsLoading(false);
        })();

        return async () => await stopLocationTracking(locationSubscription);
    }, []);

    return { coordinate, errorMsg, isLoading };
}

export default useLocation;
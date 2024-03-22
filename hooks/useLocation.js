import * as Location from "expo-location";
import { useEffect, useState } from "react";

function useLocation() {
    const [coordinate, setCoordinates] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                setErrorMsg("Permission to access location was denied");
                return;
            }

            const coordinates = await Location.getCurrentPositionAsync({}).then(location => location.coords);
            setCoordinates(coordinates);
            setIsLoading(false);
        })();
    }, []);
    return { coordinate, errorMsg, isLoading };
}

export default useLocation;
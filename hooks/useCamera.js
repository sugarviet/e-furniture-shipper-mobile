import { useEffect, useRef, useState } from "react";
import { Camera } from 'expo-camera'
import MediaLibrary from 'expo-media-library';

function useCamera() {
    const [hasCameraPermission, setHasCameraPermission] = useState();
    const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
    const [photo, setPhoto] = useState(undefined);

    const cameraRef = useRef(undefined);

    useEffect(() => {
        (async () => {
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
            setHasCameraPermission(cameraPermission.status === "granted");
            setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
        })();
    }, []);

    const takePhoto = async () => {
        const options = {
            quality: 1,
            base64: true,
            exif: false,
        }

        const newPhoto = await cameraRef.current.takePictureAsync(options);
        setPhoto(newPhoto)
    }

    return { hasCameraPermission, hasMediaLibraryPermission, cameraRef, takePhoto, photo, setPhoto };
}

export default useCamera;
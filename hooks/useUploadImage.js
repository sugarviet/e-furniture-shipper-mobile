import { useState } from "react";

function useUploadImage() {
    const [imgURL, setImgUrl] = useState(null);

    const handleUploadImage = async () => {
        try {
            const { status } =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
                alert("Permission to access media library is required!");
                return;
            }

            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
            });

            if (!result.canceled) {
                const formData = new FormData();
                formData.append("key", "373bc9b180e920e9c2ebceaa3b341eed");
                formData.append("image", {
                    uri: result.uri,
                    name: "test.jpg",
                    type: "image/jpeg",
                });

                const response = await axios.post(
                    "https://api.imgbb.com/1/upload",
                    formData
                );
                setImgUrl(result.uri);
            }
        } catch (error) {
            console.error(error);
        }
    };
    return {};
}

export default useUploadImage;
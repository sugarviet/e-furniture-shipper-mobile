import { useState } from "react";
import axios from "axios";

function useUploadImage() {
    const [imgURL, setImgUrl] = useState("");

    const uploadImage = async (photo, callback) => {
        try {
            const formData = new FormData();
            formData.append("key", "373bc9b180e920e9c2ebceaa3b341eed");
            formData.append("image", {
                uri: photo.uri,
                name: "test.jpg",
                type: "image/jpeg",
            });

            const data = await axios.post(
                "https://api.imgbb.com/1/upload",
                formData
            ).then((response) => response.data);

            setImgUrl(data.data.display_url);
            callback(data.data.display_url)
        } catch (error) {
            console.error(error);
        }
    };
    return { imgURL, uploadImage };
}

export default useUploadImage;
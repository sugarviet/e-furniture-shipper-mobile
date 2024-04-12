import { Camera } from "expo-camera";
import useCamera from "../../hooks/useCamera";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import useUploadImage from "../../hooks/useUploadImage";

function CameraView({ onClose, onSubmitPhoto }) {
  const { cameraRef, takePhoto, photo, setPhoto } = useCamera();
  const { uploadImage } = useUploadImage();

  const handleSubmitPhoto = async (photo) => {
    const submitPhoto = (imgUrl) => {
      onSubmitPhoto(imgUrl);
      setPhoto(undefined);
      onClose();
    };

    await uploadImage(photo, submitPhoto);
  };

  if (photo)
    return (
      <SafeAreaView className="w-full flex-1 bg-black">
        <View className="relative flex-1 w-full">
          <TouchableOpacity
            onPress={() => setPhoto(undefined)}
            className="w-5 h-5 absolute top-6 left-4 z-50"
          >
            <Icon
              tintColor="#ffffff"
              className="w-full h-full"
              source={IMAGES.left_arrow}
            />
          </TouchableOpacity>
          <Image
            className="w-full h-full self-stretch"
            source={{ uri: photo.uri }}
          />
        </View>
        <View className="my-2">
          <TouchableOpacity
            onPress={() => handleSubmitPhoto(photo)}
            className="bg-white p-4 flex items-center"
          >
            <Text className="text-base">Customer Received</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

  return (
    <SafeAreaView className="w-full flex-1 bg-black">
      <Camera ref={cameraRef} className="relative flex-1 w-full justify-end">
        <TouchableOpacity
          onPress={onClose}
          className="w-4 h-4 absolute top-6 left-4"
        >
          <Icon
            tintColor="#ffffff"
            className="w-full h-full"
            source={IMAGES.close}
          />
        </TouchableOpacity>
        <View className="flex-row items-center justify-center my-12">
          <TouchableOpacity
            onPress={takePhoto}
            className="rounded-full w-12 h-12 bg-white aspect-square"
          >
            <View className="rounded-full absolute -right-3 -left-3 -top-3 -bottom-3 bg-white opacity-20 -z-10"></View>
          </TouchableOpacity>
        </View>
      </Camera>
    </SafeAreaView>
  );
}

export default CameraView;

import { Image, Linking, Text, TouchableOpacity, View } from "react-native";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";
import { classNames } from "../../utils/classNames";
import { formatVietnamesePhoneNumber } from "../../utils/formatVietnamesePhoneNumber";

function ReceiverBriefInfo({ className, data }) {
  const { first_name, last_name, phone } = data;

  const makePhoneCall = () => {
    Linking.openURL(`telprompt: ${phone}`);
  };

  return (
    <View className={classNames("flex-row items-center", className)}>
      <Image
        className="w-10 h-10 rounded-full"
        source={{
          uri: "https://wallpapers.com/images/featured/chelsea-fc-logo-esvpoici90jl4fpx.jpg",
        }}
      />
      <View className="flex-1 mx-1">
        <Text className="font-bold">{`${last_name} ${first_name}`}</Text>
        <Text className="text-xs">{formatVietnamesePhoneNumber(phone)}</Text>
      </View>
      <View className="flex-row items-center">
        <TouchableOpacity onPress={() => makePhoneCall()}>
          <Icon className="w-6 h-6" source={IMAGES.telephone} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ReceiverBriefInfo;

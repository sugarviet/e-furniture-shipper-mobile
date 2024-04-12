import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import useConfirmDeliveryTrip from "../../hooks/useConfirmDeliveryTrip";
import Icon from "../Icon";
import { IMAGES } from "../../constants/image";

export default function ConfirmCustomerReceived({ className, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={classNames(
        className,
        "py-3 justify-center border flex-row border-teal-700 rounded-sm text-base items-center bg-teal-600"
      )}
    >
      <Text className="text-base text-white mr-1">Take a photo</Text>
      <Icon tintColor="#ffffff" className="w-5 h-5 " source={IMAGES.camera} />
    </TouchableOpacity>
  );
}

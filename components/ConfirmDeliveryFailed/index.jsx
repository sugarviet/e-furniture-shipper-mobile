import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";

export default function ConfirmDeliveryFail({ className }) {
  return (
    <TouchableOpacity
      className={classNames(
        className,
        "py-3 rounded-sm justify-center items-center border"
      )}
    >
      <Text className="text-base">Delivery failed</Text>
    </TouchableOpacity>
  );
}

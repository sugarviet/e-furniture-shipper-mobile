import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";

export default function ConfirmCustomerReceived({ className }) {
  return (
    <TouchableOpacity
      className={classNames(
        className,
        "py-3 justify-center border border-teal-700 rounded-sm text-base items-center bg-teal-600"
      )}
    >
      <Text className="text-base text-white">Customer Received</Text>
    </TouchableOpacity>
  );
}

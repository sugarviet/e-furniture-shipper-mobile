import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import useConfirmDeliveryTrip from "../../hooks/useConfirmDeliveryTrip";

export default function ConfirmCustomerReceived({ className, id, order_id }) {
  const { confirmOrderDelivered } = useConfirmDeliveryTrip(id, order_id);

  const note =
    "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/7/22/933368/Hang-Di.jpg";

  return (
    <TouchableOpacity
      onPress={() => confirmOrderDelivered(note)}
      className={classNames(
        className,
        "py-3 justify-center border border-teal-700 rounded-sm text-base items-center bg-teal-600"
      )}
    >
      <Text className="text-base text-white">Customer Received</Text>
    </TouchableOpacity>
  );
}

import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import useConfirmDeliveryTrip from "../../hooks/useConfirmDeliveryTrip";

export default function ConfirmDeliveryFail({ className, id, order_id }) {
  const { confirmOrderFailed } = useConfirmDeliveryTrip(id, order_id);

  const note = "Không liên lạc được với khách hàng";
  return (
    <TouchableOpacity
      onPress={() => confirmOrderFailed(note)}
      className={classNames(
        className,
        "py-3 rounded-sm justify-center items-center border"
      )}
    >
      <Text className="text-base">Delivery failed</Text>
    </TouchableOpacity>
  );
}

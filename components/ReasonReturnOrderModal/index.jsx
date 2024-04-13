import { View, Text, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import RadioGroup from "react-native-radio-buttons-group";

export default function ReasonReturnOrderModal({ onClose, onConfirm }) {
  const radioButtonsProps = {
    size: 16,
    labelStyle: { fontSize: 12, color: "#6B7280" },
    color: "#6B7280",
  };

  const radioButtons = useMemo(
    () => [
      {
        id: "1",
        label: "Damaged or Broken Goods During Transit",
        value: "Damaged or Broken Goods During Transit",
        ...radioButtonsProps,
      },
      {
        id: "2",
        label: "Goods Not as Described or Expected",
        value: "Goods Not as Described or Expected",
        ...radioButtonsProps,
      },
      {
        id: "4",
        label: "Shipping Address Not Founded in Delivery Trip",
        value: "Shipping Address Not Founded in Delivery Trip",
        ...radioButtonsProps,
      },
      {
        id: "5",
        label: "Difficulty in Contacting the Customer",
        value: "Difficulty in Contacting the Customer",
        ...radioButtonsProps,
      },
      {
        id: "6",
        label: "Excessive Delivery Time",
        value: "Excessive Delivery Time",
        ...radioButtonsProps,
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState(radioButtons[0].id);

  return (
    <View className="w-72 bg-white rounded-md">
      <View className="px-2 py-4 border-b border-gray-300">
        <RadioGroup
          containerStyle={{ alignItems: "flex-start" }}
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
        />
      </View>
      <View className="flex-row">
        <TouchableOpacity
          onPress={onClose}
          className="flex items-center flex-1 py-4"
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
        <View className="border-l border-gray-300"></View>
        <TouchableOpacity
          onPress={() => {
            const reason = radioButtons.find((i) => i.id === selectedId).value;
            onConfirm(reason);
            onClose();
          }}
          className="flex items-center flex-1 py-4"
        >
          <Text className="text-teal-600 font-semibold">OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

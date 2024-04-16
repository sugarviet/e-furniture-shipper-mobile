import { View, ScrollView } from "react-native";
import React from "react";
import ReceiverBriefInfo from "../ReceiverBriefInfo";
import DeliveryTripDetail from "../DeliveryTripDetail";
import OrderDetail from "../OrderDetail";
import ConfirmCustomerReceived from "../ConfirmCustomerReceived";
import ConfirmDeliveryFailed from "../ConfirmDeliveryFailed";

export default function OrderShipmentInformation({
  data,
  onConfirmDeliveryFailed,
  onConfirmCustomerReceived,
}) {
  return (
    <ScrollView className="px-4">
      <ReceiverBriefInfo
        data={data.order.order_shipping}
        className="border-b py-4 border-gray-300"
      />
      <DeliveryTripDetail
        data={data}
        className="border-b py-4 border-gray-300"
      />
      <OrderDetail className="border-b py-4 border-gray-300" data={data} />
      <View className="flex-row py-4">
        <ConfirmDeliveryFailed
          onPress={onConfirmDeliveryFailed}
          className="flex-1 mr-1"
        />
        <ConfirmCustomerReceived
          onPress={onConfirmCustomerReceived}
          className="flex-1 ml-1"
        />
      </View>
    </ScrollView>
  );
}

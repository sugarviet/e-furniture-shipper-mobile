import { ScrollView, View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import { useLocalSearchParams } from "expo-router";
import BottomSheet from "../../components/BottomSheet";
import ReceiverBriefInfo from "../../components/ReceiverBriefInfo";
import DeliveryTripDetail from "../../components/DeliveryTripDetail";
import { useState } from "react";
import OrderDetail from "../../components/OrderDetail";
import ConfirmDeliveryFail from "../../components/ConfirmDeliveryFailed";
import ConfirmCustomerReceived from "../../components/ConfirmCustomerReceived";
import { useAuthStore } from "../../stores/useAuthStore";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_delivery_trip_api_of } from "../../api/deliveryApi";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  const { token } = useAuthStore();
  const { account_id } = token;
  const { data, isLoading } = useFetchAuth(
    get_delivery_trip_api_of(account_id)
  );

  if (isLoading) return null;
  const { orders, _id } = data;
  const currentOrder = orders[1];

  const { order } = currentOrder;

  const destinations = orders.map((orderShipping) => {
    const { address, district, ward } = orderShipping;
    return `${address} ${ward} ${district} Thành phố Hồ Chí Minh Viêt Nam`;
  });

  return (
    <View className="flex-1">
      <View className="absolute top-16 left-4 z-50">
        <HeaderButton
          onPress={go_back}
          className="w-4 h-4"
          source={IMAGES.back_arrow}
        />
      </View>
      <Map destinations={destinations} />
      <BottomSheet>
        <ScrollView className="px-4">
          <ReceiverBriefInfo
            data={currentOrder.order.order_shipping}
            className="border-b py-4 border-gray-300"
          />
          <DeliveryTripDetail
            data={currentOrder}
            className="border-b py-4 border-gray-300"
          />
          <OrderDetail
            className="border-b py-4 border-gray-300"
            data={currentOrder}
          />
          <View className="flex-row py-4">
            <ConfirmDeliveryFail
              order_id={order._id}
              id={_id}
              className="flex-1 mr-1"
            />
            <ConfirmCustomerReceived
              order_id={order._id}
              id={_id}
              className="flex-1 ml-1"
            />
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
}

export default DeliveryScreen;

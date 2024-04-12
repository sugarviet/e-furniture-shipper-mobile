import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import BottomSheet from "../../components/BottomSheet";
import ReceiverBriefInfo from "../../components/ReceiverBriefInfo";
import DeliveryTripDetail from "../../components/DeliveryTripDetail";
import OrderDetail from "../../components/OrderDetail";
import ConfirmDeliveryFail from "../../components/ConfirmDeliveryFailed";
import ConfirmCustomerReceived from "../../components/ConfirmCustomerReceived";
import { useAuthStore } from "../../stores/useAuthStore";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_delivery_trip_api_of } from "../../api/deliveryApi";
import CameraView from "../../components/CameraView";
import { useState } from "react";
import Icon from "../../components/Icon";
import useConfirmDeliveryTrip from "../../hooks/useConfirmDeliveryTrip";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  const { token } = useAuthStore();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const { account_id } = token;
  const { data, isLoading } = useFetchAuth(
    get_delivery_trip_api_of(account_id)
  );

  if (isLoading) return null;
  const { orders, _id } = data;
  const currentOrder = orders[1];
  const { order } = currentOrder;

  const { confirmOrderDelivered } = useConfirmDeliveryTrip(_id, order._id);

  const destinations = orders.map((orderShipping) => {
    const { address, district, ward } = orderShipping;
    return `${address} ${ward} ${district} Thành phố Hồ Chí Minh Viêt Nam`;
  });

  return (
    <View className="flex-1 relative">
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
              onPress={() => setIsCameraOpen(true)}
              className="flex-1 ml-1"
            />
          </View>
        </ScrollView>
      </BottomSheet>
      {isCameraOpen && (
        <View
          style={{ backgroundColor: "rgba(1, 1, 1, 0.25)" }}
          className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50"
        >
          <CameraView
            onSubmitPhoto={(imgUrl) => confirmOrderDelivered(imgUrl)}
            onClose={() => setIsCameraOpen(false)}
          />
        </View>
      )}
    </View>
  );
}

export default DeliveryScreen;

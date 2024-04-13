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
import useConfirmDeliveryTrip from "../../hooks/useConfirmDeliveryTrip";
import ReasonReturnOrderModal from "../../components/ReasonReturnOrderModal";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  const { token } = useAuthStore();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isReturnOrderModalOpen, setIsReturnOrderModalOpen] = useState(false);
  const { account_id } = token;
  const { data, isLoading } = useFetchAuth(
    get_delivery_trip_api_of(account_id)
  );

  if (isLoading) return null;
  const { orders, _id, current_delivery, status } = data;
  const currentOrder = orders[current_delivery];
  const { order } = currentOrder;

  const { confirmOrderDelivered, confirmOrderFailed } = useConfirmDeliveryTrip(
    _id,
    order._id
  );

  const warehouse = orders[0].order.warehouses[0].warehouse_id;

  const destinations = [...orders, warehouse].map((orderShipping) => {
    const { address, district, ward, location } = orderShipping;
    const street = address || location;
    return `${street} ${ward} ${district} Thành phố Hồ Chí Minh Viêt Nam`;
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
      <Map
        currentDestination={
          status === 1 ? current_delivery + 1 : current_delivery
        }
        destinations={destinations}
      />
      {status !== 1 && (
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
                onPress={() => setIsReturnOrderModalOpen(true)}
                className="flex-1 mr-1"
              />
              <ConfirmCustomerReceived
                onPress={() => setIsCameraOpen(true)}
                className="flex-1 ml-1"
              />
            </View>
          </ScrollView>
        </BottomSheet>
      )}
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
      {isReturnOrderModalOpen && (
        <View
          style={{ backgroundColor: "rgba(1, 1, 1, 0.25)" }}
          className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-50"
        >
          <ReasonReturnOrderModal
            onConfirm={(reason) => confirmOrderFailed(reason)}
            onClose={() => setIsReturnOrderModalOpen(false)}
          />
        </View>
      )}
    </View>
  );
}

export default DeliveryScreen;

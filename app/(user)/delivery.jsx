import { ScrollView, View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import { useLocalSearchParams } from "expo-router";
import BottomSheet from "../../components/BottomSheet";
import ShipmentTrackingCard from "../../components/ShipmentTrackingCard";
import ReceiverBriefInfo from "../../components/ReceiverBriefInfo";
import DeliveryTripDetail from "../../components/DeliveryTripDetail";
import { useState } from "react";
import OrderDetail from "../../components/OrderDetail";
import ConfirmDoneDeliveryTrip from "../../components/ConfirmDoneDeliveryTrip";
import ConfirmDeliveryFail from "../../components/ConfirmDeliveryFailed";
import ConfirmCustomerReceived from "../../components/ConfirmCustomerReceived";
import SimpleMap from "../../components/ShowMap";

function DeliveryScreen() {
  const { go_back } = useNavigation();
  const { data } = useLocalSearchParams();
  const orderShippings = JSON.parse(data);

  const [currentOrder, setCurrentOrder] = useState(orderShippings[0]);

  const destinations = orderShippings.map((orderShipping) => {
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
      {/* <SimpleMap /> */}
      {/* <Map destinations={destinations} /> */}
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
            order={currentOrder}
          />
          <View className="flex-row py-4">
            <ConfirmDeliveryFail className="flex-1 mr-1" />
            <ConfirmCustomerReceived className="flex-1 ml-1" />
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
}

export default DeliveryScreen;

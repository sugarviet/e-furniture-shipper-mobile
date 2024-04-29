import { View } from "react-native";
import HeaderButton from "../../components/HeaderButton";
import { IMAGES } from "../../constants/image";
import Map from "../../components/Map";
import useNavigation from "../../hooks/useNavigation";
import BottomSheet from "../../components/BottomSheet";
import { useAuthStore } from "../../stores/useAuthStore";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_delivery_trip_api_of } from "../../api/deliveryApi";
import CameraView from "../../components/CameraView";
import { useState } from "react";
import useDeliveryTrip from "../../hooks/useDeliveryTrip";
import ReasonReturnOrderModal from "../../components/ReasonReturnOrderModal";
import OrderShipmentInformation from "../../components/OrderShipmentInformation";
import PickUpProduct from "../../components/PickUpProduct";
import DeliverySummary from "../../components/DeliveryTripSummary";
import MapHeader from "../../components/MapHeader";

function DeliveryScreen() {
  const [duration, setDuration] = useState(0);
  const [distance, setDistance] = useState(0);
  const { go_back } = useNavigation();
  const { token } = useAuthStore();
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isReturnOrderModalOpen, setIsReturnOrderModalOpen] = useState(false);
  const { account_id } = token;
  const { data, isLoading } = useFetchAuth(
    get_delivery_trip_api_of(account_id)
  );

  if (isLoading) return null;

  const { orders, _id, current_state, warehouse, status, state } = data;
  const productsOnTrip = orders.reduce((list, cur) => {
    const { order } = cur;
    const { order_products } = order;

    const merged_products = order_products.reduce((products, cur) => {
      const productsClone = products.map((obj) => Object.assign({}, obj));
      const existed_item = productsClone.find((i) => i.code === cur.code);

      if (!existed_item) return [...products, cur];

      existed_item.quantity += cur.quantity;
      return [...productsClone];
    }, list);

    return merged_products;
  }, []);

  const orderShippings = orders.map((item) => {
    const { order } = item;
    return order.order_shipping;
  });

  const routes = [warehouse, ...orderShippings, warehouse];
  const { stateValue, item } = current_state;
  const currentRoute =
    stateValue === 1 ? 1 + item : stateValue === 2 ? routes.length - 1 : 0;

  const currentOrder = orders[item];
  const { order } = currentOrder;

  const {
    confirmOrderDelivered,
    confirmOrderFailed,
    startDeliveryTrip,
    completeDeliveryTrip,
  } = useDeliveryTrip(_id, order._id);

  const destinations = routes.map((orderShipping) => {
    const { address, district, ward, location } = orderShipping;
    const street = address || location;
    return `${street} ${ward} ${district} Thành phố Hồ Chí Minh Viêt Nam`;
  });

  const currentDestination = destinations[currentRoute];

  const DELIVERY_TRIP_STATE_RENDER = [
    {
      ContainerComponent: (
        <PickUpProduct
          data={productsOnTrip}
          location={currentDestination}
          onStartDeliveryTrip={startDeliveryTrip}
        />
      ),
    },
    {
      ContainerComponent: (
        <OrderShipmentInformation
          data={currentOrder}
          onConfirmCustomerReceived={() => setIsCameraOpen(true)}
          onConfirmDeliveryFailed={() => setIsReturnOrderModalOpen(true)}
        />
      ),
    },
    {
      ContainerComponent: (
        <DeliverySummary
          tripState={state}
          productsOnTrip={productsOnTrip}
          onCompleteDeliveryTrip={completeDeliveryTrip}
          data={orders}
          location={currentDestination}
        />
      ),
    },
  ];

  return (
    <View className="flex-1 relative">
      <View className="absolute top-16 left-4 z-50 flex-row items-center">
        <HeaderButton
          onPress={go_back}
          className="w-4 h-4"
          source={IMAGES.back_arrow}
        />
        <MapHeader
          duration={duration}
          distance={distance}
          destination={currentDestination}
          className="flex-1"
        />
      </View>
      <Map
        setDistance={setDistance}
        setDuration={setDuration}
        destination={currentDestination}
      />

      <BottomSheet>
        {DELIVERY_TRIP_STATE_RENDER[status].ContainerComponent}
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

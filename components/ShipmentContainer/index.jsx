import { ScrollView, View } from "react-native";
import ShipmentTrackingCard from "../ShipmentTrackingCard";
import ShipmentHistory from "../ShipmentHistory";
import { classNames } from "../../utils/classNames";
import ConfirmDoneDeliveryTrip from "../ConfirmDoneDeliveryTrip";
import { useAuthStore } from "../../stores/useAuthStore";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_delivery_trip_api_of } from "../../api/deliveryApi";

function ShipmentContainer({ className }) {
  const { token } = useAuthStore();
  const { account_id } = token;
  const { data, isLoading } = useFetchAuth(
    get_delivery_trip_api_of(account_id)
  );

  if (isLoading) return;

  const { orders, _id, warehouse, current_state } = data;

  const orderShippings = orders.map((item) => {
    const { order } = item;
    return order.order_shipping;
  });

  const routes = [warehouse, ...orderShippings, warehouse];
  const total = orders.reduce((total, order) => total + order.amount, 0);

  const { stateValue, item } = current_state;
  const currentRoute =
    stateValue === 1 ? 1 + item : stateValue === 2 ? routes.length - 1 : 0;

  return (
    <ScrollView className={classNames(className)}>
      <ShipmentTrackingCard
        total={total}
        currentShipment={currentRoute}
        data={routes}
      />
      <View className="pb-12">
        <ShipmentHistory data={orders} />
      </View>
    </ScrollView>
  );
}

export default ShipmentContainer;

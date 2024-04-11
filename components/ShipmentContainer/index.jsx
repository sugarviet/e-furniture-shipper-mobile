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

  const { orders, _id } = data;
  console.log(data);

  return (
    <ScrollView className={classNames(className)}>
      <ShipmentTrackingCard data={orders} />
      <View className="pb-12">
        <ShipmentHistory data={orders} />
        <ConfirmDoneDeliveryTrip id={_id} className="m-2" />
      </View>
    </ScrollView>
  );
}

export default ShipmentContainer;

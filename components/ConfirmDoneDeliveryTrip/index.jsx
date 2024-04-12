import { Text, TouchableOpacity } from "react-native";
import { useUpdate } from "../../hooks/api-hooks";
import {
  get_check_status_delivery_api,
  get_done_delivery_trip_api,
} from "../../api/deliveryApi";
import { classNames } from "../../utils/classNames";

function ConfirmDoneDeliveryTrip({ className, id }) {
  const { mutate: confirmDone } = useUpdate(
    get_done_delivery_trip_api(id),
    undefined,
    () => {},
    () => {},
    get_check_status_delivery_api()
  );

  return (
    <TouchableOpacity
      className={classNames(
        className,
        "py-3 rounded-sm items-center bg-teal-700"
      )}
      onPress={confirmDone}
    >
      <Text className="text-white text-base uppercase tracking-wider font-semibold">
        Complete trip
      </Text>
    </TouchableOpacity>
  );
}

export default ConfirmDoneDeliveryTrip;

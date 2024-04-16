import { get_check_status_delivery_api, get_delivery_trip_api_of, get_done_delivery_trip_api, get_start_delivery_trip_api, get_update_order_inside_trip_status } from "../api/deliveryApi";
import { useAuthStore } from "../stores/useAuthStore";
import { useUpdate } from "./api-hooks";

function useDeliveryTrip(id, order_id) {
    const { token } = useAuthStore();
    const { account_id } = token;

    const { mutate: startDeliveryTrip } = useUpdate(get_start_delivery_trip_api(id), undefined, () => { }, () => { }, get_delivery_trip_api_of(account_id))

    const { mutate: completeDeliveryTrip } = useUpdate(
        get_done_delivery_trip_api(id),
        undefined,
        () => { },
        () => { },
        get_check_status_delivery_api()
    );

    const { mutate: updateOrderStatus } = useUpdate(
        get_update_order_inside_trip_status(id), undefined, () => { }, () => { }, get_delivery_trip_api_of(account_id)
    );

    const confirmOrderDelivered = (note) => {
        const body = {
            order_id: order_id,
            state: 1,
            note: note,
        };

        updateOrderStatus(body);
    };

    const confirmOrderFailed = (note) => {
        const body = {
            order_id: order_id,
            state: 2,
            note: note,
        };

        updateOrderStatus(body);
    };

    return { completeDeliveryTrip, startDeliveryTrip, confirmOrderDelivered, confirmOrderFailed };
}

export default useDeliveryTrip;
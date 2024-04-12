import { get_delivery_trip_api_of, get_update_order_inside_trip_status } from "../api/deliveryApi";
import { useAuthStore } from "../stores/useAuthStore";
import { useUpdate } from "./api-hooks";

function useConfirmDeliveryTrip(id, order_id) {
    const { token } = useAuthStore();
    const { account_id } = token;

    const { mutate: updateOrderStatus } = useUpdate(
        get_update_order_inside_trip_status(id), undefined, () => { }, () => { }, get_delivery_trip_api_of(account_id)
    );

    const confirmOrderDelivered = (note) => {
        const body = {
            order_id: order_id,
            state: 1,
            note: note,
        };

        console.log(body)
        // updateOrderStatus(body);
    };

    const confirmOrderFailed = (note) => {
        const body = {
            order_id: order_id,
            state: 2,
            note: note,
        };

        console.log(body)
        // updateOrderStatus(body);
    };

    return { confirmOrderDelivered, confirmOrderFailed };
}

export default useConfirmDeliveryTrip;
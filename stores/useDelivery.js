import { get_create_delivery_api } from "../api/deliveryApi";
import { get_orders_api } from "../api/orderApi";
import { usePostAuth } from "../hooks/api-hooks";
import { useAuthStore } from "./useAuthStore";

function useDelivery() {
    const { mutate: createDeliveryTripMutation } = usePostAuth(get_create_delivery_api(), undefined, () => { }, () => { }, get_orders_api("processing"))
    const { token } = useAuthStore();
    const { account_id } = token;

    const createDeliveryTrip = (orders) => {
        const body = {
            "account_id": account_id,
            "orders": orders.map(order => ({ order: order._id }))
        }

        createDeliveryTripMutation(body);
    }

    return { createDeliveryTrip };
}

export default useDelivery;
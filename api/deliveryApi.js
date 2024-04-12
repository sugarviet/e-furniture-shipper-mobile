const DELIVERY_URL = "/account/delivery"
const DELIVERY_TRIP_URL = '/deliveryTrip'

export const get_check_status_delivery_api = () => DELIVERY_URL;
export const get_create_delivery_api = () => DELIVERY_TRIP_URL;
export const get_delivery_trip_api_of = (id) => DELIVERY_TRIP_URL + '/' + id;
export const get_done_delivery_trip_api = (id) => DELIVERY_TRIP_URL + '/done' + '/' + id;
export const get_update_order_inside_trip_status = (id) => DELIVERY_TRIP_URL + '/' + id;
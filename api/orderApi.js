const ORDER_URL = "/order/delivery"

export const get_pending_orders_api = () => ORDER_URL + '?page=1&limit=10&type=pending'
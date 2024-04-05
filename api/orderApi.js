const ORDER_URL = "/order/delivery"

export const get_orders_api = (type) => ORDER_URL + `?page=1&limit=10&type=${type}`
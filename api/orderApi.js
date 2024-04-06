const ORDER_URL = "/order/delivery"

export const get_orders_api = (type, status = 1) => ORDER_URL + `?page=1&limit=10&type=${type}&status=${status}`
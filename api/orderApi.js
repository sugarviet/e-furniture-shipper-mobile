const ORDER_URL = "/order/delivery"

export const get_orders_api = (type, status = 1) => ORDER_URL + `?page=1&limit=10&type=${type}&status=${status}`

export const get_make_order_payment_api = (id) => ORDER_URL + "/pay-again" + '/' + id;

export const get_order_by_pay_os = (params) => {
    let orderCode;
    for (const key in params) {
        if (typeof params[key] === 'string') {
            orderCode = params[key];
        }
    }
    return `${ORDER_URL}/payos/${orderCode}`;
}
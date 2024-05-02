import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import { formatCurrency } from "../../utils/formatCurrency";
import { PAYMENT_METHOD } from "../../constants/enum";
import capitalCaseToSnackCase from "../../constants/capitalCaseToSnackCase";
import { useUpdate } from "../../hooks/api-hooks";
import { get_make_order_payment_api } from "../../api/orderApi";
import * as WebBrowser from "expo-web-browser";
import * as Linking from "expo-linking";
import useNotification from "../../hooks/useNotification";
import { get_delivery_trip_api_of } from "../../api/deliveryApi";
import { useAuthStore } from "../../stores/useAuthStore";

export default function DeliveryTripDetail({ className, data }) {
  const { order, payment } = data;
  const { order_shipping } = order;
  const { address, district, ward } = order_shipping;
  const { order_products, order_checkout } = order;
  const { paid } = order_checkout;
  const { must_paid, paid_amount } = paid;
  const { token } = useAuthStore();

  const { error_message } = useNotification();

  const { mutate: payAgain } = useUpdate(
    get_make_order_payment_api(order._id),
    undefined,
    async (data) => {
      await WebBrowser.openBrowserAsync(data.data.metaData);
      WebBrowser.dismissBrowser();
      go_to_home();
    },
    (error) => {
      error_message(error.message);
    },
    get_delivery_trip_api_of(token.account_id)
  );
  const url = Linking.useURL();

  return (
    <View className={classNames(className)}>
      <View>
        <View className="flex-row justify-between items-center">
          <Text className="font-semibold mb-2">Order information</Text>
          {must_paid - paid_amount !== 0 && (
            <TouchableOpacity
              onPress={() => {
                const body = {
                  returnUrl: url + "/--/delivery",
                  cancelUrl: url + "/--/delivery",
                };
                payAgain(body);
              }}
              className="border p-2"
            >
              <Text className="text-xs">Payment QR Code</Text>
            </TouchableOpacity>
          )}
        </View>
        {order_products.map((item, index) => {
          const { product, quantity } = item;
          const { name } = product;
          return (
            <View key={index}>
              <Text className="text-xs text-gray-500">{`${name} x ${quantity}`}</Text>
            </View>
          );
        })}
        <View className="my-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">
              {`${PAYMENT_METHOD[capitalCaseToSnackCase(payment)].title}:`}
            </Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(must_paid)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">Paid:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(paid_amount)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">Collect payment:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(must_paid - paid_amount)}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text className="font-semibold mb-2">Ship to address</Text>
        <Text className="text-xs text-gray-500">{`${address}, ${district}, ${ward}, Thành phố Hồ Chí Minh, Việt Nam`}</Text>
      </View>
    </View>
  );
}

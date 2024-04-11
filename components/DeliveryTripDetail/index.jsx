import { View, Text } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import { formatCurrency } from "../../utils/formatCurrency";
import { PAYMENT_METHOD } from "../../constants/enum";
import capitalCaseToSnackCase from "../../constants/capitalCaseToSnackCase";

export default function DeliveryTripDetail({ className, data }) {
  const { order, payment } = data;
  const { order_shipping } = order;
  const { address, district, ward } = order_shipping;
  const { order_products, order_checkout } = order;
  const { paid } = order_checkout;
  const { must_paid, paid_amount } = paid;

  return (
    <View className={classNames(className)}>
      <View>
        <Text className="font-semibold mb-1">Order information</Text>
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

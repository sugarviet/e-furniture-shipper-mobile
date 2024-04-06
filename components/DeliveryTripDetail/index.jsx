import { View, Text } from "react-native";
import React from "react";
import { classNames } from "../../utils/classNames";
import { formatCurrency } from "../../utils/formatCurrency";
import { PAYMENT_METHOD } from "../../constants/enum";

export default function DeliveryTripDetail({ className, data }) {
  const { order, amount, payment } = data;
  const { order_shipping, warehouses } = order;
  const { address, district, ward } = order_shipping;
  const { products } = warehouses[0];

  const paid = 0;
  return (
    <View className={classNames(className)}>
      <View>
        <Text className="font-semibold mb-1">Order information</Text>
        {products.map((product, index) => {
          const { name, quantity, variation } = product;
          return (
            <View key={index}>
              <Text className="text-xs text-gray-500">{`${name} x ${quantity}`}</Text>
            </View>
          );
        })}
        <View className="my-2">
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">
              {`${PAYMENT_METHOD[payment].title}:`}
            </Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(amount)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">Paid:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(paid)}
            </Text>
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-gray-500 text-xs">Collect payment:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(amount - paid)}
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

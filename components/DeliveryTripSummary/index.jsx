import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "../Icon";
import { COLORS } from "../../constants/color";
import { IMAGES } from "../../constants/image";
import { classNames } from "../../utils/classNames";
import useNavigation from "../../hooks/useNavigation";
import { formatCurrency } from "../../utils/formatCurrency";
import ProductBriefInfo from "../ProductBriefInfo";
import { formatDateTime } from "../../utils/formatDate";

export default function DeliverySummary({
  tripState,
  productsOnTrip,
  location,
  data,
  onCompleteDeliveryTrip,
}) {
  const { go_back } = useNavigation();
  const getOrderStatus = (state) =>
    data.reduce((total, current) => {
      const { status } = current;

      return status === state ? total + 1 : total + 0;
    }, 0);

  const total = data.reduce((total, current) => total + current.amount, 0);

  const onlinePayment = data.reduce((total, current) => {
    const { order_checkout } = current.order;
    const { paid } = order_checkout;
    return total + paid.paid_amount;
  }, 0);

  return (
    <View className="justify-between flex-1">
      <ScrollView
        contentContainerStyle={{ justifyContent: "space-between" }}
        className="px-4"
      >
        <View className="mb-2">
          <Text className="font-semibold mb-1">Go to warehouse at</Text>
          <Text className="text-gray-500 text-xs">{location}</Text>
        </View>
        <View className="mb-2">
          <Text className="font-semibold mb-1">Tracking delivery trip</Text>
          {tripState.map((trip, i) => {
            const { state, time, item, stateValue } = trip;

            const name =
              stateValue === 1
                ? `${state} ${data[item].order.order_code}`
                : state;

            return (
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-500 text-xs">{`${name}:`}</Text>
                <Text className="text-gray-500 text-xs">
                  {formatDateTime(time)}
                </Text>
              </View>
            );
          })}
        </View>
        <View className="mb-2">
          <Text className="font-semibold mb-1">Products on trip</Text>
          {productsOnTrip.map((product, index) => {
            return (
              <View key={index}>
                <ProductBriefInfo
                  className="bg-transparent px-0"
                  data={product}
                />
              </View>
            );
          })}
        </View>
        <View className="mb-2">
          <Text className="font-semibold mb-1">Delivery trip summary</Text>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-500 text-xs">Total:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(total)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-500 text-xs">Online payment:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(onlinePayment)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-500 text-xs">Cash on delivery:</Text>
            <Text className="text-gray-500 text-xs">
              {formatCurrency(total - onlinePayment)}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View className="flex-row justify-end pb-6 items-center bg-white">
        <View className="flex-1 flex-row">
          <View className="flex-1 items-center justify-center">
            <Icon
              className="w-6 h-6"
              tintColor="red"
              source={IMAGES.goods_return}
            />
            <Text style={{ fontSize: 10 }}>
              <Text className="text-sm font-bold text-rose-500">
                {getOrderStatus(2)}
              </Text>{" "}
              order return
            </Text>
          </View>
          <View className="flex-1 items-center justify-center">
            <Icon
              className="w-6 h-6"
              tintColor={COLORS.primary}
              source={IMAGES.goods}
            />
            <Text style={{ fontSize: 10 }}>
              <Text className="text-sm font-bold text-teal-600">
                {getOrderStatus(1)}
              </Text>{" "}
              order received
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            onCompleteDeliveryTrip();
            go_back();
          }}
          className={classNames(
            "px-4 py-4 items-center justify-between bg-teal-600"
          )}
        >
          <Text className="text-center text-md text-white">
            Complete delivery trip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

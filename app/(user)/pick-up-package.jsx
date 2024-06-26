import { TouchableOpacity, View, Text, ScrollView } from "react-native";
import { Stack } from "expo-router";
import HeaderButton from "../../components/HeaderButton";
import useNavigation from "../../hooks/useNavigation";
import { IMAGES } from "../../constants/image";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_orders_api } from "../../api/orderApi";
import ShipmentCard from "../../components/ShipmentCard";
import { formatCurrency } from "../../utils/formatCurrency";
import Icon from "../../components/Icon";
import { COLORS } from "../../constants/color";
import CheckBox from "react-native-check-box";
import { useEffect, useState } from "react";
import useDelivery from "../../stores/useDelivery";
import { classNames } from "../../utils/classNames";
import { useDeliveryStore } from "../../stores/useDeliveryStore";

function PickUpPackageScreen() {
  const { data, isLoading } = useFetchAuth(get_orders_api("processing"));
  const { go_back } = useNavigation();
  const { createDeliveryTrip } = useDelivery();
  const { currentState } = useDeliveryStore();

  const [selectOrders, setSelectOrders] = useState([]);

  const addToSelectOrders = (order) => {
    setSelectOrders([...selectOrders, order]);
  };

  const removeFromSelectOrders = (order) => {
    setSelectOrders([
      ...selectOrders.filter((i) => i.order_code !== order.order_code),
    ]);
  };

  const isOrderSelected = (order) => {
    return selectOrders.some((i) => i.order_code === order.order_code);
  };

  const handleSelectOrder = (order) => {
    if (isOrderSelected(order)) removeFromSelectOrders(order);
    if (!isOrderSelected(order)) addToSelectOrders(order);
  };

  const total = selectOrders.reduce(
    (total, order) => total + order.order_checkout.final_total,
    0
  );

  useEffect(() => {
    if (currentState !== 1) {
      go_back();
    }
  }, [currentState]);

  if (isLoading) return null;

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          animation: "slide_from_right",
          title: "Pick up package",
          headerLeft: () => (
            <HeaderButton
              onPress={go_back}
              className="w-4 h-4"
              source={IMAGES.back_arrow}
            />
          ),
        }}
      />
      <ScrollView className="flex-1">
        {data.data.map((order, i) => {
          const { order_products } = order;
          const products = order_products
            .map(
              (order_product) =>
                `${order_product.product_id.name} x ${order_product.quantity}`
            )
            .join(", ");
          return (
            <TouchableOpacity
              onPress={() => {
                handleSelectOrder(order);
              }}
              key={i}
              className="mb-2 flex-row items-center bg-white"
            >
              <CheckBox
                className="ml-2"
                isChecked={isOrderSelected(order)}
                onClick={() => {
                  handleSelectOrder(order);
                }}
              />
              <ShipmentCard
                className="flex-1 shadow-none"
                key={i}
                order={order}
                products={products}
                status="processing"
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View className="flex-row justify-end pb-6 items-center bg-white">
        <View className="flex-1 flex-row">
          <View className="flex-1 items-center justify-center">
            <Icon
              className="w-6 h-6"
              tintColor={COLORS.primary}
              source={IMAGES.delivery_truck}
            />
            <Text style={{ fontSize: 10 }}>
              <Text className="text-sm font-bold">2</Text> orders/trip
            </Text>
          </View>
          <View className="flex-1 items-end justify-center px-2">
            <Text className="text-xs">Total:</Text>
            <Text className="font-bold">{formatCurrency(total)}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => createDeliveryTrip(selectOrders)}
          disabled={selectOrders.length <= 0}
          className={classNames(
            "px-4 py-4 items-center justify-between",
            selectOrders.length <= 0 ? "bg-gray-200" : "bg-teal-600"
          )}
        >
          <Text className="text-center text-md text-white">
            Request delivery
          </Text>
          <Text className="text-center text-md text-white">
            {`(${selectOrders.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PickUpPackageScreen;

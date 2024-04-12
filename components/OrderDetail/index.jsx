import { View, Text } from "react-native";
import { classNames } from "../../utils/classNames";
import { PAYMENT_METHOD } from "../../constants/enum";
import { formatDate } from "../../utils/formatDate";
import capitalCaseToSnackCase from "../../constants/capitalCaseToSnackCase";

function OrderDetail({ className, data }) {
  const { payment, date, order } = data;
  const { order_code } = order;

  console.log(order);

  return (
    <View className={classNames(className)}>
      <Text className="font-semibold mb-1">Order detail</Text>
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-xs">Note</Text>
        <Text className="text-gray-500 text-xs">Không có</Text>
      </View>
      <View className="flex-row justify-between mt-2">
        <Text className="text-gray-500 text-xs">Code</Text>
        <Text className="text-gray-500 text-xs">{order_code}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-xs">Order created at</Text>
        <Text className="text-gray-500 text-xs">{formatDate(date)}</Text>
      </View>
      <View className="flex-row justify-between">
        <Text className="text-gray-500 text-xs">Payment</Text>
        <Text className="text-gray-500 text-xs">
          {PAYMENT_METHOD[capitalCaseToSnackCase(payment)].title}
        </Text>
      </View>
    </View>
  );
}

export default OrderDetail;

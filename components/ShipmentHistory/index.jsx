import { Text, View } from "react-native";
import ShipmentCard from "../ShipmentCard";

function ShipmentHistory({ data }) {
  return (
    <View className="my-2">
      <View className="flex-row justify-between items-center px-2">
        <Text className="text-lg text-teal-700 font-bold tracking-wider">
          Recent shipment
        </Text>
        <Text className="text-gray-500 text-xs">{`(${data.length})`}</Text>
      </View>
      {data.map((item, i) => {
        const { order } = item;
        const { order_products, current_order_tracking } = order;
        const products = order_products
          .map(
            (order_product) =>
              `${order_product.product.name} x ${order_product.quantity}`
          )
          .join(", ");
        return (
          <ShipmentCard
            className="border-b border-gray-200 my-1"
            key={i}
            products={products}
            order={order}
            status={current_order_tracking.name}
          />
        );
      })}
    </View>
  );
}

export default ShipmentHistory;

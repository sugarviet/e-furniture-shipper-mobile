import { Image, Text, View } from "react-native";
import { classNames } from "../../utils/classNames";
import { formatCurrency } from "../../utils/formatCurrency";

function ProductBriefInfo({ data, className }) {
  const { name, thumbs } = data.product;
  const { quantity, price } = data;
  return (
    <View
      className={classNames(
        "flex-row items-center bg-white p-4 shadow-lg shadow-slate-300",
        className
      )}
    >
      <View className="flex-row flex-1">
        <Image className="w-12 h-12 object-contain mr-2" src={thumbs[0]} />
        <View>
          <Text>{name}</Text>
          <Text className="text-gray-500 text-xs">x {quantity}</Text>
        </View>
      </View>
      <Text>{formatCurrency(price)}</Text>
    </View>
  );
}

export default ProductBriefInfo;

import { Image, Text, View } from "react-native";
import { classNames } from "../../utils/classNames";
import { formatCurrency } from "../../utils/formatCurrency";

function ProductBriefInfo({ data, className }) {
  const { name, thumbs } = data.product;
  const { quantity, variation } = data;
  return (
    <View
      className={classNames(
        "flex-row items-center bg-white p-4 shadow-lg shadow-slate-300",
        className
      )}
    >
      <View className="flex-row flex-1 items-center">
        <Image className="w-12 h-12 object-contain mr-2" src={thumbs[0]} />
        <View className="flex-1">
          <Text>{name}</Text>
          <Text className="text-gray-500 text-xs">x {quantity}</Text>
        </View>
        <View>
          <View
            className="w-6 h-6 shadow-xl rounded-xl"
            style={{ backgroundColor: variation[0].color }}
          ></View>
        </View>
      </View>
    </View>
  );
}

export default ProductBriefInfo;

import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import { COLORS } from "../../constants/color";
import { IMAGES } from "../../constants/image";
import Icon from "../Icon";
import { classNames } from "../../utils/classNames";
import ProductBriefInfo from "../ProductBriefInfo";

export default function PickUpProduct({ data, onStartDeliveryTrip, location }) {
  const [selectProducts, setSelectProducts] = useState([]);

  const addToSelectProducts = (product) => {
    setSelectProducts([...selectProducts, product]);
  };

  const removeFromSelectProducts = (product) => {
    setSelectProducts([
      ...selectProducts.filter((i) => i.code !== product.code),
    ]);
  };

  const isProductSelected = (product) => {
    return selectProducts.some((i) => i.code === product.code);
  };

  const handleSelectProduct = (product) => {
    if (isProductSelected(product)) removeFromSelectProducts(product);
    if (!isProductSelected(product)) addToSelectProducts(product);
  };

  return (
    <View className="justify-between flex-1">
      <ScrollView
        contentContainerStyle={{ justifyContent: "space-between" }}
        className="px-4"
      >
        <View className="mb-2">
          <Text className="font-semibold mb-1">Go to warehouse at: </Text>
          <Text className="text-gray-500 text-xs">{location}</Text>
        </View>
        <View className="mb-2">
          <Text className="font-semibold mb-1">Pick up products:</Text>
          {data.map((product, i) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleSelectProduct(product);
                }}
                key={i}
                className="mb-2 flex-row items-center bg-white shadow-xl"
              >
                <CheckBox
                  className="ml-2"
                  isChecked={isProductSelected(product)}
                  onClick={() => {
                    handleSelectProduct(product);
                  }}
                />
                <ProductBriefInfo
                  className="flex-1 shadow-none"
                  data={product}
                />
              </TouchableOpacity>
            );
          })}
        </View>
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
              <Text className="text-sm font-bold">{selectProducts.length}</Text>{" "}
              products in total
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onStartDeliveryTrip}
          disabled={selectProducts.length !== data.length}
          className={classNames(
            "px-4 py-4 items-center justify-between",
            selectProducts.length !== data.length
              ? "bg-gray-200"
              : "bg-teal-600"
          )}
        >
          <Text className="text-center text-md text-white">
            Start delivery trip
          </Text>
          <Text className="text-center text-md text-white">{`(${selectProducts.length})`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

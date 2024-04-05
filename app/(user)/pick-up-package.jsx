import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import HeaderButton from "../../components/HeaderButton";
import useNavigation from "../../hooks/useNavigation";
import { IMAGES } from "../../constants/image";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_orders_api } from "../../api/orderApi";
import ShipmentCard from "../../components/ShipmentCard";

function PickUpPackageScreen() {
  const { data, isLoading } = useFetchAuth(get_orders_api("processing"));
  const { go_back } = useNavigation();

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
        {data.data.map((order, i) => (
          <ShipmentCard key={i} order={order} status="processing" />
        ))}
      </ScrollView>
      <View className="flex-row justify-end pb-6 items-center bg-white">
        <TouchableOpacity className="bg-teal-600 px-4 py-4 h-full flex-row items-center justify-between">
          <Text className="font-bold text-center text-md text-white uppercase">
            Request delivery
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default PickUpPackageScreen;

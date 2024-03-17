import { SafeAreaView, Text, View } from "react-native";
import ShipmentCard from "../../components/ShipmentCard";
import ShipmentTrackingCard from "../../components/ShipmentTrackingCard";
import ShipmentHistory from "../../components/ShipmentHistory";
import PickUpPackage from "../../components/PickUpPackage";

function HomeScreen() {
  return (
    <View className="flex-1 bg-teal-800">
      <SafeAreaView>
        <View className="p-8">
          <View className="mb-4">
            <Text className="text-xl font-bold text-white tracking-wider">
              Track your shipment
            </Text>
            <Text className="text-sm text-slate-200 tracking-wider">
              Keep track your goods
            </Text>
          </View>
          <PickUpPackage />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white px-8 py-4">
        <ShipmentTrackingCard />
        <ShipmentHistory />
      </View>
    </View>
  );
}

export default HomeScreen;

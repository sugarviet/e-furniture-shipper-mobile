import { SafeAreaView, Text, View } from "react-native";
import ShipmentTrackingCard from "../../components/ShipmentTrackingCard";

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
          <ShipmentTrackingCard />
        </View>
      </SafeAreaView>
      <View className="flex-1 bg-white p-8">
        <ShipmentTrackingCard />
      </View>
    </View>
  );
}

export default HomeScreen;

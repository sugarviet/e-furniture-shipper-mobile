import { SafeAreaView, ScrollView, Text, View } from "react-native";
import ShipmentTrackingCard from "../../components/ShipmentTrackingCard";
import ShipmentHistory from "../../components/ShipmentHistory";
import PickUpPackage from "../../components/PickUpPackage";
import UserBriefInfo from "../../components/UserBriefInfo";
import LogoutButton from "../../components/LogoutButton";

function HomeScreen() {
  return (
    <View className="flex-1 bg-teal-800">
      <SafeAreaView>
        <View className="px-8 pt-4 pb-8">
          <View className="flex-row justify-between items-center">
            <UserBriefInfo />
            <LogoutButton />
          </View>
          <View className="my-4">
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
      <ScrollView className="flex-1 bg-white px-8 pt-4">
        {/* <ShipmentTrackingCard /> */}
        <View className="pb-12">
          <ShipmentHistory />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

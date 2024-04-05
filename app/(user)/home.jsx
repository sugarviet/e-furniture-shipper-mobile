import { SafeAreaView, Text, View } from "react-native";
import UserBriefInfo from "../../components/UserBriefInfo";
import LogoutButton from "../../components/LogoutButton";
import { useDeliveryStore } from "../../stores/useDeliveryStore";
import ShipmentContainer from "../../components/ShipmentContainer";
import PickUpPackageContainer from "../../components/PickUpPackageContainer";

function HomeScreen() {
  const { currentState } = useDeliveryStore();

  const STATE_RENDER = [
    {},
    {
      ContainerComponent: (
        <PickUpPackageContainer className="flex-1 px-8 justify-end" />
      ),
    },
    {
      ContainerComponent: (
        <ShipmentContainer className="flex-1 bg-white px-8 pt-4" />
      ),
    },
  ];

  return (
    <View className="flex-1 bg-teal-800">
      <SafeAreaView>
        <View className="px-8 pt-4">
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
        </View>
      </SafeAreaView>
      {STATE_RENDER[currentState].ContainerComponent}
    </View>
  );
}

export default HomeScreen;

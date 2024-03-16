import { Tabs } from "expo-router";
import Icon from "../../../components/Icon";
import { IMAGES } from "../../../constants/image";
import { Image } from "react-native";
import TabBarCustomButton from "../../../components/TabBarCustomButton";

const tabs = [
  { page: "home", name: "Home", icon: IMAGES.delivery_truck },
  { page: "delivery", name: "Delivery", icon: IMAGES.location_tracking },
];

function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "transparent",
        },
      }}
    >
      {tabs.map((tab) => {
        const { page, name, icon } = tab;
        return (
          <Tabs.Screen
            key={name}
            name={page}
            options={{
              tabBarIcon: ({ focused }) => (
                <Icon
                  className="w-8 h-8"
                  source={icon}
                  tintColor={focused ? "#115E59" : "#6B7280"}
                />
              ),
              tabBarButton: (props) => <TabBarCustomButton {...props} />,
            }}
          />
        );
      })}
    </Tabs>
  );
}

export default TabsLayout;

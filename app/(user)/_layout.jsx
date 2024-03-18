import { Stack } from "expo-router";

const UserLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_bottom",
      }}
    />
  );
};

export default UserLayout;

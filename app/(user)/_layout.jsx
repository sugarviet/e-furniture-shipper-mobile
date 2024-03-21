import { Stack } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";

const UserLayout = () => {
  const { token } = useAuthStore();
  const { go_to_sign_in } = useNavigation();

  useEffect(() => {
    if (!token) return go_to_sign_in();
  }, []);

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

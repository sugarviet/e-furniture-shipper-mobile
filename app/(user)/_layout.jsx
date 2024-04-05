import { Stack } from "expo-router";
import { useEffect } from "react";
import { useAuthStore } from "../../stores/useAuthStore";
import useNavigation from "../../hooks/useNavigation";
import { useFetchAuth } from "../../hooks/api-hooks";
import { get_check_status_delivery_api } from "../../api/deliveryApi";
import { useDeliveryStore } from "../../stores/useDeliveryStore";

const UserLayout = () => {
  const { token } = useAuthStore();
  const { go_to_sign_in } = useNavigation();
  const { setCurrentState } = useDeliveryStore();

  const { data, isLoading } = useFetchAuth(get_check_status_delivery_api());

  useEffect(() => {
    if (!token) return go_to_sign_in();
  }, [token]);

  useEffect(() => {
    if (!data || isLoading) return;
    setCurrentState(data);
  }, [data, isLoading]);

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

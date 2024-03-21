import { Slot } from "expo-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { useEffect } from "react";
import useNavigation from "../../hooks/useNavigation";

function AuthenticationLayout() {
  const { token } = useAuthStore();
  const { go_to_home } = useNavigation();

  useEffect(() => {
    if (token) return go_to_home();
  }, [token]);

  return <Slot />;
}

export default AuthenticationLayout;

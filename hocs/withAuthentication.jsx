import { useEffect } from "react";
import { useAuthStore } from "../stores/useAuthStore";
import useNavigation from "../hooks/useNavigation";

function withAuthentication(Screen) {
  return () => {
    const { token } = useAuthStore();
    const { go_to_home, go_to_sign_in } = useNavigation();

    useEffect(() => {
      if (!token) return go_to_sign_in();
      return go_to_home();
    }, []);

    return <Screen />;
  };
}

export default withAuthentication;

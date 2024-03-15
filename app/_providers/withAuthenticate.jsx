import { useEffect } from "react";
import { router } from "expo-router";
import { useAuthStore } from "../../stores/useAuthStore";

const withAuthenticate = (WrappedComponent) => {
  return () => {
    const { token } = useAuthStore();

    useEffect(() => {
      if (!token) return router.replace("/sign-in");
      return router.replace("/");
    }, []);
    return <WrappedComponent />;
  };
};

export default withAuthenticate;
